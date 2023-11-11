CREATE DATABASE AutoAlert;

CREATE TABLE ItemVerificacion (
    IdItem SERIAL PRIMARY KEY,
    DescripcionObservacion VARCHAR(10) NOT NULL
);

CREATE TABLE TipoAlerta (
    Cod_Tipo SERIAL PRIMARY KEY,
    Descripcion VARCHAR(50) NOT NULL
);

CREATE TABLE ModelosVehiculos( 
    Cod_modelo SERIAL PRIMARY KEY,
    Descripcion_modelo VARCHAR(20) NOT NULL
);

CREATE TABLE EstadoAlerta (
    Cod_estado SERIAL PRIMARY KEY,
    Descripcion_estado VARCHAR(60) NOT NULL
);

CREATE TABLE TipoArchivo (
    Cod_tipo INT PRIMARY KEY,
    Formato VARCHAR(30) NOT NULL
);

CREATE TABLE Permisos (
    Cod_permiso INT PRIMARY KEY,
    Descripcion VARCHAR(60) NOT NULL
);

CREATE TABLE Roles (
    Cod_rol INT PRIMARY KEY,
    Nombre_Rol VARCHAR(30) NOT NULL,
	Cod_permiso INT REFERENCES Permisos(Cod_permiso) NOT NULL
);

CREATE TABLE TipoTelefono(
    Cod_tipo_tel SERIAL PRIMARY KEY,
    Tipo_telefono VARCHAR(40) NOT NULL
);

CREATE TABLE Pais(
    Cod_pais SERIAL PRIMARY KEY,
    Nombre_pais VARCHAR(40) NOT NULL
);

CREATE TABLE TipoProveedor(
    Cod_tipo_prov SERIAL PRIMARY KEY,
    Desc_tipo_prov VARCHAR(20) NOT NULL
);

CREATE TABLE EstadoTarea(
	Cod_Est_Tarea SERIAL PRIMARY KEY,
	Desc_EstadoTarea VARCHAR(60) NOT NULL
);

CREATE TABLE EstadoSolicitud(
	Cod_Est_Solicitud SERIAL PRIMARY KEY,
	Desc_EstadoSolicitud VARCHAR(60) NOT NULL
);

CREATE TABLE Vehiculo(
    VIN VARCHAR(17) PRIMARY KEY,
    Cod_modelo INT REFERENCES ModelosVehiculos(Cod_modelo) NOT NULL,
    Fecha_fabricacion DATE NOT NULL
);

CREATE TABLE Ciudad (
    Cod_ciudad SERIAL PRIMARY KEY,
    NombreCiudad VARCHAR(40) NOT NULL,
    Cod_pais INT REFERENCES Pais(Cod_pais) NOT NULL
);

CREATE TABLE Proveedor(
    Cod_proveedor INT PRIMARY KEY,
	Cod_tipo_prov INT REFERENCES TipoProveedor(Cod_tipo_prov) NOT NULL,
	Nombre_Empresa VARCHAR(100) NOT NULL
);

CREATE TABLE SedeEmpresa(
    Cod_direccion SERIAL PRIMARY KEY,
    Desc_dir VARCHAR(100) NOT NULL,
    Cod_ciudad INT REFERENCES Ciudad(Cod_ciudad) NOT NULL,
	Cod_proveedor INT REFERENCES Proveedor(Cod_proveedor) NOT NULL
);

CREATE TABLE Persona (
    Id_colaborador SERIAL PRIMARY KEY,
    Correo_colaborador VARCHAR(50) UNIQUE,
    Cod_dir INT REFERENCES SedeEmpresa(Cod_direccion) NOT NULL,
    Nombre_colaborador VARCHAR(50) NOT NULL,
    Apellido_colaborador VARCHAR(50) NOT NULL,
    Sexo VARCHAR(20) NOT NULL,
    Fecha_nacimiento DATE NOT NULL,
	esContacto BOOLEAN NOT NULL,
    Activo BOOLEAN NOT NULL
);

CREATE TABLE Telefonos(
    Cod_telefono SERIAL PRIMARY KEY,
    ID_persona INT REFERENCES Persona(Id_colaborador) NOT NULL,
    Telefono VARCHAR(20) NOT NULL,
    CodTipo_tel INT REFERENCES TipoTelefono(Cod_tipo_tel) NOT NULL
);

CREATE TABLE Usuario (
    Usuario VARCHAR(20) PRIMARY KEY,
    Id_colaborador INT REFERENCES Persona(Id_colaborador) NOT NULL,
    Estado BOOLEAN NOT NULL,
    Cod_rol INT REFERENCES Roles(Cod_rol) NOT NULL,
    Clave VARCHAR(30) NOT NULL
);

CREATE TABLE Pieza(
    Referencia VARCHAR(10) PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
	Cod_proveedor INT REFERENCES Proveedor(Cod_proveedor) NOT NULL
);

CREATE TABLE Alerta (
    IdAlerta SERIAL PRIMARY KEY,
    Descripcion_E_cliente VARCHAR(250) NOT NULL,
    Descripcion_M_fallo VARCHAR(250) NOT NULL,
    Cod_Tipo INT REFERENCES TipoAlerta(Cod_Tipo) NOT NULL,
    Autor VARCHAR(20) REFERENCES Usuario(Usuario) NOT NULL,
    Fecha_creacion DATE DEFAULT CURRENT_DATE,
    VIN VARCHAR(17) REFERENCES Vehiculo(VIN) NOT NULL,
    Kilometraje INT NOT NULL,
    Estado_alerta INT REFERENCES EstadoTarea(Cod_Est_Tarea) NOT NULL,
    Costo INT NOT NULL
);

CREATE TABLE PiezaAlerta(
	Cod_Ref_Def SERIAL PRIMARY KEY,
	IdAlerta INT REFERENCES Alerta(IdAlerta) NOT NULL,
	Ref_Pieza VARCHAR(10) REFERENCES Pieza(Referencia) NOT NULL
);

CREATE TABLE ArchivoAdjunto (
    Cod_archivo SERIAL PRIMARY KEY,
    Cod_alerta INT REFERENCES Alerta(IdAlerta) NOT NULL,
    Cod_tipo INT REFERENCES TipoArchivo(Cod_tipo) NOT NULL
);

CREATE TABLE AlertaItem (
    IdAlertaItem SERIAL PRIMARY KEY,
    Item INT REFERENCES ItemVerificacion(IdItem) NOT NULL,
    Alerta INT REFERENCES Alerta(IdAlerta) NOT NULL,
    Estado INT REFERENCES EstadoTarea(Cod_Est_Tarea) NOT NULL
);

CREATE TABLE ObservacionSeguimientoTarea (
    Cod_Observacion SERIAL PRIMARY KEY,
    DescripcionObservacion VARCHAR(60) NOT NULL,
    Id_alerta_item INT REFERENCES AlertaItem(IdAlertaItem) NOT NULL
);

CREATE TABLE ResponsableTarea (
    Id_responsable SERIAL PRIMARY KEY,
    Tarea INT REFERENCES AlertaItem(IdAlertaItem) NOT NULL,
    Responsable VARCHAR(20) REFERENCES Usuario(Usuario) NOT NULL
);

CREATE TABLE EvidenciaTto(
	idEvidencia SERIAL PRIMARY KEY,
	Id_responsable INT REFERENCES ResponsableTarea(Id_responsable) NOT NULL,
	Fecha_Creacion DATE DEFAULT CURRENT_DATE,
	Cod_Est_Solicitud INT REFERENCES EstadoSolicitud(Cod_Est_Solicitud) NOT NULL
);

CREATE TABLE Archivo(
	Cod_Archivo SERIAL PRIMARY KEY,
	Titulo VARCHAR(30) NOT NULL,
	idEvidencia INT REFERENCES EvidenciaTto(idEvidencia) NOT NULL,
	Cod_tipo INT REFERENCES TipoArchivo(Cod_tipo) NOT NULL
);

INSERT INTO ItemVerificacion (DescripcionObservacion) VALUES
  ('Item 1'),
  ('Item 2'),
  ('Item 3');

INSERT INTO TipoAlerta (Descripcion) VALUES
  ('Tipo de Alerta 1'),
  ('Tipo de Alerta 2'),
  ('Tipo de Alerta 3');

INSERT INTO ModelosVehiculos (Descripcion_modelo) VALUES
  ('Camión'),
  ('Camioneta'),
  ('Eléctrico');

INSERT INTO EstadoAlerta (Descripcion_estado) VALUES
  ('Iniciada'),
  ('En revisión'),
  ('Concluida');

INSERT INTO TipoArchivo (Cod_tipo, Formato) VALUES
  (1, 'Formato 1'),
  (2, 'Formato 2'),
  (3, 'Formato 3');

INSERT INTO Permisos (Cod_permiso, Descripcion) VALUES
  (1, 'Agregar Usuario'),
  (2, 'Agregar Proveedor'),
  (3, 'Actualizar Usuario');

INSERT INTO Roles (Cod_rol, Nombre_Rol, Cod_permiso) VALUES
  (1, 'Administrador', 1),
  (2, 'Usuario', 3),
  (3, 'Jefe Compras', 2);

INSERT INTO TipoTelefono (Tipo_telefono) VALUES
  ('Celular'),
  ('Fijo'),
  ('Oficina');

INSERT INTO Pais (Nombre_pais) VALUES
  ('Colombia'),
  ('Estados Unidos'),
  ('Francia');

INSERT INTO TipoProveedor (Desc_tipo_prov) VALUES
  ('Taller'),
  ('Repuestos'),
  ('Concesionario');

INSERT INTO EstadoTarea (Desc_EstadoTarea) VALUES
  ('En Ejecución'),
  ('En observación'),
  ('En Revisión');

INSERT INTO EstadoSolicitud (Desc_EstadoSolicitud) VALUES
  ('Estado Solicitud 1'),
  ('Estado Solicitud 2'),
  ('Estado Solicitud 3');

INSERT INTO Vehiculo (VIN, Cod_modelo, Fecha_fabricacion) VALUES
  ('VIN12345678901234', 1, '2022-01-01'),
  ('VIN98765432109876', 2, '2022-02-02'),
  ('VIN54321098765432', 3, '2022-03-03');

INSERT INTO Ciudad (NombreCiudad, Cod_pais) VALUES
  ('Medellín', 1),
  ('Bogotá', 1),
  ('Cali', 1);

INSERT INTO Proveedor (Cod_proveedor, Cod_tipo_prov, Nombre_Empresa) VALUES
  (1, 1, 'Empresa 1'),
  (2, 3, 'Empresa 2'),
  (3, 3, 'Empresa 3');

INSERT INTO SedeEmpresa (Desc_dir, Cod_ciudad, Cod_proveedor) VALUES
  ('Direccion 1', 1, 1),
  ('Direccion 2', 2, 2),
  ('Direccion 3', 3, 3);

INSERT INTO Persona (Correo_colaborador, Cod_dir, Nombre_colaborador, Apellido_colaborador, Sexo, Fecha_nacimiento, esContacto, Activo) VALUES
  ('correo1@ejemplo.com', 1, 'Nombre 1', 'Apellido 1', 'Masculino', '1990-01-01', true, true),
  ('correo2@ejemplo.com', 2, 'Nombre 2', 'Apellido 2', 'Femenino', '1995-02-01', false, true),
  ('correo3@ejemplo.com', 3, 'Nombre 3', 'Apellido 3', 'Femenino', '2000-03-01', true, false);

INSERT INTO Telefonos (ID_persona, Telefono, CodTipo_tel) VALUES
  (1, '123456789', 1),
  (2, '987654321', 2),
  (3, '555555555', 3);

INSERT INTO Usuario (Usuario, Id_colaborador, Estado, Cod_rol, Clave) VALUES
  ('usuario1', 1, true, 1, 'clave1'),
  ('usuario2', 2, true, 2, 'clave2'),
  ('usuario3', 3, true, 3, 'clave3');

INSERT INTO Pieza (Referencia, Nombre, Cod_proveedor) VALUES
  ('Ref1', 'Pieza 1', 1),
  ('Ref2', 'Pieza 2', 2),
  ('Ref3', 'Pieza 3', 3);

INSERT INTO Alerta (Descripcion_E_cliente, Descripcion_M_fallo, Cod_Tipo, Autor, VIN, Kilometraje, Estado_alerta, Costo) VALUES
  ('No enciende el stop', 'Aparente fallo eléctico', 1, 'usuario1', 'VIN12345678901234', 10000, 1, 500000000),
  ('Se demora en frenar', 'Pendiente por Revisar', 2, 'usuario1', 'VIN98765432109876', 20000, 2, 750000000),
  ('Falla el medidor de gasolina', 'Pendiente por revisar', 3, 'usuario3', 'VIN54321098765432', 30000, 3, 1000000);

INSERT INTO PiezaAlerta (IdAlerta, Ref_Pieza) VALUES
  (1, 'Ref1'),
  (2, 'Ref2'),
  (3, 'Ref3');

INSERT INTO ArchivoAdjunto (Cod_alerta, Cod_tipo) VALUES
  (1, 1),
  (2, 2),
  (3, 3);

INSERT INTO AlertaItem (Item, Alerta, Estado) VALUES
  (1, 2, 1),
  (2, 2, 2),
  (3, 1, 3);

INSERT INTO ObservacionSeguimientoTarea (DescripcionObservacion, Id_alerta_item) VALUES
  ('Una Observación', 2),
  ('Segunda Observación', 3),
  ('Última Observación', 3);

INSERT INTO ResponsableTarea (Tarea, Responsable) VALUES
  (1, 'usuario2'),
  (2, 'usuario2'),
  (3, 'usuario3');

INSERT INTO EvidenciaTto (Id_responsable, Cod_Est_Solicitud) VALUES
  (1, 1),
  (2, 2),
  (3, 3);

INSERT INTO Archivo (Titulo, idEvidencia, Cod_tipo) VALUES
  ('Archivo 1', 1, 1),
  ('Archivo 2', 2, 2),
  ('Archivo 3', 3, 3);
