import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, telefono, email, fecha, sabor, tamano, descripcion, comentarios, imagen } = body;

    console.log('=== DATOS RECIBIDOS ===');
    console.log('Tiene imagen:', !!imagen);
    if (imagen) {
      console.log('Tipo de imagen:', typeof imagen);
      console.log('Keys de imagen:', Object.keys(imagen));
      console.log('imagen.data existe:', !!imagen.data);
      if (imagen.data) {
        console.log('Primeros 50 caracteres de imagen.data:', String(imagen.data).substring(0, 50));
      }
    }

    // Validación básica
    if (!nombre || !telefono || !fecha || !sabor || !tamano || !descripcion) {
      return NextResponse.json(
        { success: false, message: 'Todos los campos requeridos deben estar completos' },
        { status: 400 }
      );
    }

    // Configurar nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Preparar adjuntos
    const attachments = [];
    if (imagen && imagen.data) {
      const matches = imagen.data.match(/^data:(.+);base64,(.+)$/);
      console.log('Regex matches:', matches ? 'SI' : 'NO');
      if (matches && matches.length === 3) {
        const mimeType = matches[1];
        const base64Data = matches[2];
        console.log('MIME type:', mimeType);
        console.log('Longitud base64:', base64Data.length);
        let extension = 'jpg';
        if (mimeType.includes('png')) extension = 'png';
        else if (mimeType.includes('pdf')) extension = 'pdf';
        else if (mimeType.includes('jpeg')) extension = 'jpg';

        attachments.push({
          filename: `referencia-${nombre.replace(/\s+/g, '-')}.${extension}`,
          content: base64Data,
          encoding: 'base64',
          contentType: mimeType
        });
      }
    }

    console.log('=== ATTACHMENTS ===');
    console.log('Número de adjuntos:', attachments.length);
    if (attachments.length > 0) {
      console.log('Primer adjunto:', {
        filename: attachments[0].filename,
        contentType: attachments[0].contentType,
        encoding: attachments[0].encoding,
        contentLength: String(attachments[0].content).length
      });
    }

    // Enviar email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email || process.env.EMAIL_USER,
      subject: `Nueva Solicitud de Pastel - ${nombre}`,
      html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .value { color: #333; margin-top: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">🎂 Nueva Solicitud de Pastel</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Nombre:</div>
              <div class="value">${nombre}</div>
            </div>
            <div class="field">
              <div class="label">📱 Teléfono:</div>
              <div class="value">${telefono}</div>
            </div>
            ${email ? `
            <div class="field">
              <div class="label">📧 Email:</div>
              <div class="value">${email}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">📅 Fecha del Evento:</div>
              <div class="value">${fecha}</div>
            </div>
            <div class="field">
              <div class="label">🍰 Sabor:</div>
              <div class="value">${sabor}</div>
            </div>
            <div class="field">
              <div class="label">📏 Tamaño:</div>
              <div class="value">${tamano}</div>
            </div>
            <div class="field">
              <div class="label">💭 Descripción:</div>
              <div class="value">${descripcion.replace(/\n/g, '<br>')}</div>
            </div>
            ${comentarios ? `
            <div class="field">
              <div class="label">📝 Comentarios:</div>
              <div class="value">${comentarios.replace(/\n/g, '<br>')}</div>
            </div>
            ` : ''}
            ${imagen ? `
            <div class="field">
              <div class="label">🖼️ Imagen:</div>
              <div class="value">Ver adjunto</div>
            </div>
            ` : ''}
          </div>
        </div>
      </body>
      </html>
      `,
      attachments: attachments
    });

    return NextResponse.json(
      { success: true, message: 'Mensaje enviado correctamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al enviar correo:', error);
    return NextResponse.json(
      { success: false, message: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-dynamic';
