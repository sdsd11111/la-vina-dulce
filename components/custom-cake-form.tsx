"use client"

import { useState, useRef, ChangeEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Upload } from "lucide-react"

type FormData = {
  name: string;
  phone: string;
  email: string;
  eventDate: string;
  description: string;
  flavor: string;
  size: string;
  referenceImage?: File | null;
  additionalComments: string;
};

const flavors = [
  'Chocolate',
  'Vainilla',
  'Red Velvet',
  'Zanahoria',
  'Tres Leches',
  'Otro',
];

const sizes = [
  '10-15 personas',
  '15-20 personas',
  '20-30 personas',
  '30-50 personas',
  '50+ personas',
];

export default function CustomCakeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit: formHandleSubmit,
    formState: { errors },
    reset,
    setValue,
    getValues,
  } = useForm<FormData>();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log('📎 Archivo seleccionado:', file ? {
      name: file.name,
      size: file.size,
      type: file.type
    } : 'ninguno');
    
    if (file) {
      setFileToUpload(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setFileToUpload(null);
      setPreviewImage(null);
    }
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log('📝 Datos del formulario recibidos:', {
        nombre: data.name,
        tieneImagen: !!fileToUpload
      });

      // Preparar datos para enviar
      const submitData: any = {
        nombre: data.name,
        telefono: data.phone,
        email: data.email || '',
        fecha: data.eventDate,
        sabor: data.flavor,
        tamano: data.size,
        descripcion: data.description,
        comentarios: data.additionalComments || ''
      };

      // Si hay imagen, convertirla a base64
      if (fileToUpload) {
        console.log('🖼️ Convirtiendo imagen a base64...', {
          name: fileToUpload.name,
          size: fileToUpload.size,
          type: fileToUpload.type
        });

        const base64String = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (event) => {
            if (event.target?.result) {
              console.log('✅ FileReader completado');
              resolve(event.target.result as string);
            } else {
              reject(new Error('No se pudo leer el archivo'));
            }
          };
          reader.onerror = (error) => {
            console.error('❌ Error en FileReader:', error);
            reject(error);
          };
          reader.readAsDataURL(fileToUpload);
        });

        console.log('📤 Imagen convertida, tamaño:', base64String.length);
        submitData.imagen = {
          data: base64String,
          name: fileToUpload.name,
          type: fileToUpload.type
        };
      } else {
        console.log('⚠️ No hay imagen para convertir');
      }

      console.log('📤 Enviando datos al servidor...', {
        tieneImagen: !!submitData.imagen
      });

      // Enviar al API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setSubmitStatus({ type: 'success', message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.' });
        // Resetear formulario
        reset();
        setPreviewImage(null);
        setFileToUpload(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        throw new Error(result.message || 'Error al enviar el formulario');
      }
    } catch (error) {
      console.error('❌ Error completo:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus?.type === 'success') {
    return (
      <div className="bg-card p-8 rounded-lg border border-border text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-primary mb-2">¡Solicitud Enviada!</h3>
        <p className="text-muted-foreground mb-4">
          {submitStatus.message}
        </p>
        <p className="text-sm text-muted-foreground">
          También puedes contactarnos directamente por WhatsApp:
          <a href="https://wa.me/593995639050" className="text-primary hover:underline ml-1">
            +593 99 563 9050
          </a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={formHandleSubmit(onSubmit)} className="space-y-6">
      {submitStatus?.type === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{submitStatus.message}</span>
        </div>
      )}

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre completo *</Label>
            <Input
              id="name"
              {...register('name', { required: 'El nombre es requerido' })}
              placeholder="Tu nombre"
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono *</Label>
            <Input
              id="phone"
              type="tel"
              {...register('phone', {
                required: 'El teléfono es requerido',
                pattern: {
                  value: /^\d{10}$/,
                  message: 'Ingresa un teléfono válido (10 dígitos)'
                }
              })}
              placeholder="0987654321"
              className={errors.phone ? 'border-red-500' : ''}
            />
            {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              type="email"
              {...register('email', {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Ingresa un email válido'
                }
              })}
              placeholder="tucorreo@ejemplo.com"
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="eventDate">Fecha del evento *</Label>
            <Input
              id="eventDate"
              type="date"
              {...register('eventDate', { required: 'La fecha del evento es requerida' })}
              min={new Date().toISOString().split('T')[0]}
              className={errors.eventDate ? 'border-red-500' : ''}
            />
            {errors.eventDate && <p className="text-sm text-red-500">{errors.eventDate.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Describe tu torta ideal *</Label>
          <Textarea
            id="description"
            {...register('description', { required: 'La descripción es requerida' })}
            placeholder="Ej: Torta de 2 pisos, color rosa y dorado, con flores naturales..."
            rows={3}
            className={errors.description ? 'border-red-500' : ''}
          />
          {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="flavor">Sabor *</Label>
            <select
              id="flavor"
              {...register('flavor', { required: 'Selecciona un sabor' })}
              className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.flavor ? 'border-red-500' : ''}`}
            >
              <option value="">Selecciona un sabor</option>
              {flavors.map((flavor) => (
                <option key={flavor} value={flavor}>
                  {flavor}
                </option>
              ))}
            </select>
            {errors.flavor && <p className="text-sm text-red-500">{errors.flavor.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="size">Tamaño *</Label>
            <select
              id="size"
              {...register('size', { required: 'Selecciona un tamaño' })}
              className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.size ? 'border-red-500' : ''}`}
            >
              <option value="">Selecciona un tamaño</option>
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            {errors.size && <p className="text-sm text-red-500">{errors.size.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="referenceImage">Imagen de referencia (opcional)</Label>
          <div className="mt-1 flex items-center">
            <input
              type="file"
              id="referenceImage"
              accept="image/jpeg,image/jpg,image/png,application/pdf"
              onChange={handleImageChange}
              ref={fileInputRef}
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-primary-50 file:text-primary-700
                hover:file:bg-primary-100"
              disabled={isSubmitting}
            />
          </div>
          {previewImage && (
            <div className="mt-2">
              <img
                src={previewImage}
                alt="Vista previa de la imagen"
                className="h-32 w-32 object-cover rounded"
              />
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="additionalComments">Comentarios adicionales</Label>
          <Textarea
            id="additionalComments"
            {...register('additionalComments')}
            placeholder="Alergias, restricciones alimenticias, detalles adicionales..."
            rows={2}
          />
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Al enviar este formulario, aceptas nuestra política de privacidad y términos de servicio.
      </p>
    </form>
  )
}
