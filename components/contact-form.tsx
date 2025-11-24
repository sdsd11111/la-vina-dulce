"use client"

import { useState, useRef, ChangeEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  name: string;
  phone: string;
  email: string;
  eventDate: string;
  flavor: string;
  size: string;
  description: string;
  additionalComments: string;
  referenceImage?: File | null;
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
  '10-12 porciones',
  '15-20 porciones',
  '25-30 porciones',
  '40-50 porciones',
  'Personalizado',
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit: formHandleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
    getValues
  } = useForm<FormData>();

  const [fileToUpload, setFileToUpload] = useState<File | null>(null);

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
        tieneImagen: !!data.referenceImage
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

        console.log('✅ Imagen convertida correctamente:', {
          sizeKB: Math.round(base64String.length / 1024),
          preview: base64String.substring(0, 50) + '...',
          name: fileToUpload.name,
          type: fileToUpload.type
        });
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
        setSubmitStatus({ 
          success: true, 
          message: result.message || '¡Mensaje enviado con éxito!' 
        });
        // Resetear formulario
        reset();
        setPreviewImage(null);
      } else {
        throw new Error(result.message || 'Error al enviar el formulario');
      }
    } catch (error) {
      console.error('❌ Error completo:', error);
      setSubmitStatus({
        success: false,
        message: 'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {submitStatus && (
        <div
          className={`p-4 mb-6 rounded ${
            submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={formHandleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre completo *
            </label>
            <input
              id="name"
              type="text"
              {...register('name', { required: 'Este campo es requerido' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Teléfono *
            </label>
            <input
              id="phone"
              type="tel"
              {...register('phone', {
                required: 'Este campo es requerido',
                pattern: {
                  value: /^[0-9+\-\s()]*$/,
                  message: 'Ingresa un número de teléfono válido',
                },
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              disabled={isSubmitting}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              {...register('email', {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Ingresa un correo electrónico válido',
                },
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700">
              Fecha del evento *
            </label>
            <input
              id="eventDate"
              type="date"
              {...register('eventDate', { required: 'Este campo es requerido' })}
              min={new Date().toISOString().split('T')[0]}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              disabled={isSubmitting}
            />
            {errors.eventDate && (
              <p className="mt-1 text-sm text-red-600">{errors.eventDate.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="flavor" className="block text-sm font-medium text-gray-700">
              Sabor preferido *
            </label>
            <select
              id="flavor"
              {...register('flavor', { required: 'Este campo es requerido' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              disabled={isSubmitting}
            >
              <option value="">Selecciona un sabor</option>
              {flavors.map((flavor) => (
                <option key={flavor} value={flavor}>
                  {flavor}
                </option>
              ))}
            </select>
            {errors.flavor && (
              <p className="mt-1 text-sm text-red-600">{errors.flavor.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="size" className="block text-sm font-medium text-gray-700">
              Tamaño/Porciones *
            </label>
            <select
              id="size"
              {...register('size', { required: 'Este campo es requerido' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              disabled={isSubmitting}
            >
              <option value="">Selecciona un tamaño</option>
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            {errors.size && (
              <p className="mt-1 text-sm text-red-600">{errors.size.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Descripción de la idea *
          </label>
          <textarea
            id="description"
            rows={4}
            {...register('description', { required: 'Este campo es requerido' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            disabled={isSubmitting}
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Imagen de referencia (opcional)
          </label>
          <div className="mt-1 flex items-center">
            <input
              type="file"
              id="referenceImage"
              accept="image/jpeg,image/jpg,image/png,application/pdf"
              {...register('referenceImage')}
              onChange={handleImageChange}
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

        <div>
          <label htmlFor="additionalComments" className="block text-sm font-medium text-gray-700">
            Comentarios adicionales
          </label>
          <textarea
            id="additionalComments"
            rows={3}
            {...register('additionalComments')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            disabled={isSubmitting}
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-primary-400 hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Enviando...
              </>
            ) : (
              'Enviar mensaje'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
