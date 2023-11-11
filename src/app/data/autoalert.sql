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

CREATE TABLE Vehiculo(
    VIN VARCHAR(17) PRIMARY KEY,
    Cod_modelo INT REFERENCES ModelosVehiculos(Cod_modelo) NOT NULL,
    Fecha_fabricacion DATE NOT NULL
);

CREATE TABLE Alerta (
    IdAlerta SERIAL PRIMARY KEY,
    Descripcion_E_cliente VARCHAR(250) NOT NULL,
    Descripcion_M_fallo VARCHAR(250) NOT NULL,
    Cod_Tipo INT REFERENCES TipoAlerta(Cod_Tipo) NOT NULL,
    Autor VARCHAR(20) NOT NULL,
    Fecha_creacion DATE DEFAULT CURRENT_DATE,
    VIN VARCHAR(17) REFERENCES Vehiculo(VIN) NOT NULL,
    Kilometraje INT NOT NULL,
    Estado_alerta INT REFERENCES EstadoAlerta(Cod_estado) NOT NULL,
    Costo INT NOT NULL
);

CREATE TABLE AlertaItem (
    IdAlertaItem SERIAL PRIMARY KEY,
    Item INT REFERENCES ItemVerificacion(IdItem) NOT NULL,
    Alerta INT REFERENCES Alerta(IdAlerta) NOT NULL,
    Estado INT REFERENCES EstadoAlerta(Cod_estado) NOT NULL
);

CREATE TABLE TipoArchivo (
    Cod_tipo INT PRIMARY KEY,
    Formato VARCHAR(30) NOT NULL
);

CREATE TABLE ArchivoAdjunto (
    Cod_archivo SERIAL PRIMARY KEY,
    Cod_alerta INT REFERENCES Alerta(IdAlerta) NOT NULL,
    Cod_tipo INT REFERENCES TipoArchivo(Cod_tipo) NOT NULL
);

CREATE TABLE ObservacionSeguimientoTarea (
    Id_alerta_item SERIAL REFERENCES AlertaItem(IdAlertaItem) NOT NULL,
    DescripcionObservacion VARCHAR(60) NOT NULL,
    FOREIGN KEY (Id_alerta_item) REFERENCES AlertaItem(IdAlertaItem)
);

CREATE TABLE ResponsableTarea (
    Id_responsable SERIAL PRIMARY KEY,
    Tarea INT REFERENCES AlertaItem(IdAlertaItem) NOT NULL,
    Estado INT NOT NULL
);

CREATE TABLE Roles (
    Cod_rol INT PRIMARY KEY,
    Nombre_Rol VARCHAR(30) NOT NULL
);

CREATE TABLE Permisos (
    Cod_permiso INT PRIMARY KEY,
    Descripcion VARCHAR(60) NOT NULL
);

CREATE TABLE RolPermiso (
    Cod_acceso INT PRIMARY KEY,
    Cod_rol INT REFERENCES Roles(Cod_rol) NOT NULL,
    Cod_permiso INT REFERENCES Permisos(Cod_permiso) NOT NULL
);

CREATE TABLE Usuario (
    Usuario VARCHAR(20) PRIMARY KEY,
    Correo_Persona VARCHAR(50) NOT NULL,
    Estado BOOLEAN NOT NULL,
    Cod_rol INT REFERENCES Roles(Cod_rol) NOT NULL,
    Clave VARCHAR(30) NOT NULL
);

CREATE TABLE TipoTelefono(
    Cod_tipo_tel SERIAL PRIMARY KEY,
    Tipo_telefono VARCHAR(40) NOT NULL
);

CREATE TABLE Pais(
    Cod_pais SERIAL PRIMARY KEY,
    Nombre_pais VARCHAR(40) NOT NULL
);

CREATE TABLE Ciudad (
    Cod_ciudad SERIAL PRIMARY KEY,
    NombreCiudad VARCHAR(40) NOT NULL,
    Cod_pais INT REFERENCES Pais(Cod_pais) NOT NULL
);

CREATE TABLE TipoProveedor(
    Cod_tipo_prov SERIAL PRIMARY KEY,
    Desc_tipo_prov VARCHAR(20) NOT NULL
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
    Id_colaborador INT PRIMARY KEY,
    Correo_colaborador VARCHAR(50),
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
    CodTipo_tel INT NOT NULL
);

CREATE TABLE Pieza(
    Referencia VARCHAR(10) PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
	Cod_proveedor INT REFERENCES Proveedor(Cod_proveedor) NOT NULL
);

CREATE TABLE PiezaAlerta(
	Cod_Ref_Def SERIAL PRIMARY KEY,
	IdAlerta INT REFERENCES Alerta(IdAlerta) NOT NULL,
	Ref_Pieza VARCHAR(10) REFERENCES Pieza(Referencia) NOT NULL
);

CREATE TABLE EstadoTarea(
	Cod_Est_Tarea SERIAL PRIMARY KEY,
	Desc_EstadoTarea VARCHAR(60) NOT NULL
);

CREATE TABLE EstadoSolicitud(
	Cod_Est_Solicitud SERIAL PRIMARY KEY,
	Desc_EstadoSolicitud VARCHAR(60) NOT NULL
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