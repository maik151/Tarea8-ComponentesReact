import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import Dropzone from 'react-dropzone';
import 'react-datepicker/dist/react-datepicker.css';

import { Box, Typography, Paper, Avatar } from '@mui/material';

import { FormularioComponent } from './FormularioComponent.jsx';
import { InputTextComponent } from './InputTextComponent.jsx';
import { InputEmailComponent } from './InputEmailComponent.jsx';
import { InputPasswordComponent } from './InputPasswordComponent.jsx';
import { InputSearchComponent } from './InputSearchComponent.jsx';
import { InputTelComponent } from './InputTelComponent.jsx';
import { InputURLComponent } from './InputURLComponent.jsx';
import { BotonComponent } from './BotonComponent.jsx';
import { TituloComponent } from './TituloComponent.jsx';

// Opciones para React Select
const opcionesFrutas = [
  { value: 'manzana', label: 'Manzana' },
  { value: 'banana', label: 'Banana' },
  { value: 'naranja', label: 'Naranja' },
];

export default function FormularioConEsteroidesComponent() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      nombre: '',
      email: '',
      password: '',
      search: '',
      telefono: '',
      sitioWeb: '',
      frutaFavorita: null,
      fechaNacimiento: null,
      archivo: null,
    },
  });

  const archivoSubido = watch('archivo');

  const onSubmit = (data) => {
    const datosProcesados = {
      ...data,
      frutaFavorita: data.frutaFavorita?.value || null,
    };

    console.log('Formulario enviado:', datosProcesados);
    alert('Formulario enviado. Revisa la consola.');
  };

  return (
    <Box className="container mt-5">
      <TituloComponent texto="Formulario Con Esteroides" nivel={2} />

      <FormularioComponent onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded bg-light">
        {/* Nombre */}
        <InputTextComponent
          placeholder="Nombre"
          {...register('nombre', {
            required: 'El nombre es obligatorio',
            minLength: { value: 3, message: 'Mínimo 3 caracteres' },
          })}
          className={`form-control mb-3 ${errors.nombre ? 'is-invalid' : ''}`}
        />
        {errors.nombre && <div className="invalid-feedback mb-3">{errors.nombre.message}</div>}

        {/* Email */}
        <InputEmailComponent
          placeholder="Email"
          {...register('email', {
            required: 'El email es obligatorio',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Email no válido',
            },
          })}
          className={`form-control mb-3 ${errors.email ? 'is-invalid' : ''}`}
        />
        {errors.email && <div className="invalid-feedback mb-3">{errors.email.message}</div>}

        {/* Password */}
        <InputPasswordComponent
          placeholder="Contraseña"
          {...register('password', {
            required: 'La contraseña es obligatoria',
            minLength: { value: 6, message: 'Mínimo 6 caracteres' },
          })}
          className={`form-control mb-3 ${errors.password ? 'is-invalid' : ''}`}
        />
        {errors.password && <div className="invalid-feedback mb-3">{errors.password.message}</div>}

        {/* Search */}
        <InputSearchComponent
          placeholder="Buscar..."
          {...register('search')}
          className="form-control mb-3"
        />

        {/* Teléfono */}
        <InputTelComponent
          placeholder="Teléfono"
          {...register('telefono', {
            pattern: {
              value: /^[0-9]{7,15}$/,
              message: 'Teléfono no válido (7 a 15 dígitos)',
            },
          })}
          className={`form-control mb-3 ${errors.telefono ? 'is-invalid' : ''}`}
        />
        {errors.telefono && <div className="invalid-feedback mb-3">{errors.telefono.message}</div>}

        {/* URL */}
        <InputURLComponent
          placeholder="Sitio Web"
          {...register('sitioWeb', {
            pattern: {
              value: /^(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w\-.]*)*\/?$/,
              message: 'URL no válida',
            },
          })}
          className={`form-control mb-4 ${errors.sitioWeb ? 'is-invalid' : ''}`}
        />
        {errors.sitioWeb && <div className="invalid-feedback mb-3">{errors.sitioWeb.message}</div>}

        {/* Fruta Favorita */}
        <div className="mb-4">
          <label className="form-label">Fruta Favorita *</label>
          <Controller
            name="frutaFavorita"
            control={control}
            rules={{ required: 'Selecciona una fruta' }}
            render={({ field }) => (
              <Select
                {...field}
                options={opcionesFrutas}
                placeholder="Selecciona una fruta"
                className={errors.frutaFavorita ? 'is-invalid' : ''}
              />
            )}
          />
          {errors.frutaFavorita && (
            <div className="text-danger mt-1">{errors.frutaFavorita.message}</div>
          )}
        </div>

        {/* Fecha de nacimiento */}
        <div className="mb-4">
          <label className="form-label">Fecha de Nacimiento</label>
          <Controller
            control={control}
            name="fechaNacimiento"
            render={({ field }) => (
              <DatePicker
                placeholderText="Selecciona fecha"
                onChange={field.onChange}
                selected={field.value}
                className="form-control"
                dateFormat="dd/MM/yyyy"
                maxDate={new Date()}
                isClearable
              />
            )}
          />
        </div>

        {/* Archivo con Dropzone */}
        <div className="mb-4">
          <label className="form-label">Subir Archivo</label>
          <Controller
            control={control}
            name="archivo"
            render={({ field }) => (
              <Dropzone
                multiple={false}
                onDrop={(acceptedFiles) => field.onChange(acceptedFiles[0])}
              >
                {({ getRootProps, getInputProps }) => (
                  <Paper
                    variant="outlined"
                    {...getRootProps()}
                    sx={{
                      border: '2px dashed #aaa',
                      p: 2,
                      textAlign: 'center',
                      backgroundColor: '#f9f9f9',
                      cursor: 'pointer',
                    }}
                  >
                    <input {...getInputProps()} />
                    <Typography variant="body2">
                      Arrastra un archivo aquí o haz clic para seleccionar.
                    </Typography>
                    {archivoSubido && (
                      <Typography variant="body2" sx={{ mt: 1, fontWeight: 'bold' }}>
                        {archivoSubido.name}
                      </Typography>
                    )}
                  </Paper>
                )}
              </Dropzone>
            )}
          />
        </div>

        <BotonComponent texto="Enviar" type="submit" className="btn btn-primary w-100" />
      </FormularioComponent>
    </Box>
  );
}
