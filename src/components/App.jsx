import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
// Importa todos tus componentes
import { FormularioComponent } from './FormularioComponent.jsx';
import { InputTextComponent } from './InputTextComponent.jsx';
import { InputEmailComponent } from './InputEmailComponent.jsx';
import { InputPasswordComponent } from './InputPasswordComponent.jsx';
import { InputSearchComponent } from './InputSearchComponent.jsx';
import { InputTelComponent } from './InputTelComponent.jsx';
import { InputURLComponent } from './InputURLComponent.jsx';
import { BotonComponent } from './BotonComponent.jsx';
import { TituloComponent } from './TituloComponent.jsx';
import { ParrafoComponente } from './ParrafoComponente.jsx';
import { ListaDesordenadaComponent } from './ListaDesordenadaComponent.jsx';
import { TablaComponent } from './TablaComponent.jsx';
import { ImmageComponent } from './ImmageComponent.jsx';


const App = () => {
  // Estados para los inputs
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [search, setSearch] = useState('');
  const [telefono, setTelefono] = useState('');
  const [url, setUrl] = useState('');

  // Para demostrar tabla y lista
  const cabeceraTabla = ['Nombre', 'Edad', 'Ciudad'];
  const datosTabla = [
    ['Juan', 25, 'Quito'],
    ['Maria', 30, 'Guayaquil'],
    ['Luis', 22, 'Cuenca']
  ];

  const elementosLista = ['Manzana', 'Banana', 'Cereza'];

  // Manejar submit formulario
  const manejarSubmit = (e) => {
    e.preventDefault();
    alert(`Nombre: ${nombre}\nEmail: ${email}\nPassword: ${password}\nBusqueda: ${search}\nTel: ${telefono}\nURL: ${url}`);
  };

  return (
    <div className="container mt-4">
      <TituloComponent texto="Formulario con Componentes Personalizados" nivel={1} />

      <FormularioComponent onSubmit={manejarSubmit}>
        <InputTextComponent
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <InputEmailComponent
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputPasswordComponent
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <InputSearchComponent
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <InputTelComponent
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />

        <InputURLComponent
          placeholder="Sitio Web"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <BotonComponent texto="Enviar" type="submit" />
      </FormularioComponent>

      <ParrafoComponente texto="Lista de frutas:" />
      <ListaDesordenadaComponent elementos={elementosLista} />

      <ParrafoComponente texto="Tabla de datos:" />
      <TablaComponent cabecera={cabeceraTabla} datos={datosTabla} />

      <ImmageComponent
        src="https://previews.123rf.com/images/mo75/mo752103/mo75210300005/165119782-blue-react-icon-in-a-black-hexagon-the-emblem-of-a-popular-javascript-framework.jpg"
        alt="Imagen de ejemplo"
        width="200"
        height="200"
      />
    </div>
  );
};

export default App;
