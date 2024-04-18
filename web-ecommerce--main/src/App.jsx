import { useEffect, useState } from "react"
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  Stepper,
  Step,
  StepLabel
} from "@mui/material"
import EnsaladaImagen from "./assets/img/ensalada.jpg"
import EnsaladaImagen2 from "./assets/img/ensalada2.jpg"
import EnsaladaImagen3 from "./assets/img/ensalada3.jpg"
import EnsaladaImagen4 from "./assets/img/pasta1.jpg"
import EnsaladaImagen5 from "./assets/img/pasta2.jpg"
import EnsaladaImagen6 from "./assets/img/pasta3.jpg"
import EnsaladaImagen7 from "./assets/img/pizza1.jpg"
import EnsaladaImagen8 from "./assets/img/pizza2.jpg"
import EnsaladaImagen9 from "./assets/img/pizza3.jpg"
import EnsaladaImagen10 from "./assets/img/postres1.jpg"
import EnsaladaImagen11 from "./assets/img/postres2.webp"
import EnsaladaImagen12 from "./assets/img/postres3.jpg"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import { formatearMoneda } from "./helpers/formatearMoneda"
import api from "./config/axios"
import Header from "./components/Header"
import Nosotros from "./components/Nosotros"
import Separador from "./components/Separador"
import Seccion from "./components/Seccion"
import Contacto from "./components/Contacto"
import Informacion from "./components/Informacion"
import Footer from "./components/Footer"



function App() {
  const [open, setOpen] = useState(false)
  const [carrito, setCarrito] = useState([])
  const [direccionEntrega, setDireccionEntrega] = useState({
    nombre: "",
    codigoPostal: "",
    estado: "",
    municpio: "",
    region: "",
    calle: "",
    numeroExterior: "",
    numeroInterior: "",
    correo: "",
    telefono: ""
  })
  const [datosTarjeta, setDatosTarjeta] = useState({
    numeroTarjeta: "",
    nombreCompleto: "",
    fecha: "",
    codigoSeguridad: ""
  })

  const productosCopia = [
    {
      id: 1,
      nombreProducto: "Sueter",
      imagen: EnsaladaImagen,
      descripcion: "sueter mangar larga",
      precio: 45,
      cantidad: 0,
      total: 0,
      categoria: "Ropa"
    },
    {
      id: 2,
      nombreProducto: "Sueter",
      imagen: EnsaladaImagen2,
      descripcion: "sueter con apertura ",
      precio: 40,
      cantidad: 0,
      total: 0,
      categoria: "Ropa"
    },
    {
      id: 3,
      nombreProducto: "Top",
      imagen: EnsaladaImagen3,
      descripcion: "Top estilo tejido",
      precio: 50,
      cantidad: 0,
      total: 0,
      categoria: "Ropa"

    },
    {
      id: 4,
      nombreProducto: "Corrector de Ojeras",
      imagen: EnsaladaImagen4,
      descripcion: "Corrector de ojeras hidratante",
      precio: 20,
      cantidad: 0,
      total: 0,
      categoria: "Maquillaje"

    },
    {
      id: 5,
      nombreProducto: "Polvo suelto",
      imagen: EnsaladaImagen5,
      descripcion: "Polvo suelto con acabado matte",
      precio: 25,
      cantidad: 0,
      total: 0,
      categoria: "Maquillaje"

    },
    {
      id: 6,
      nombreProducto: "Pomada para cejas",
      imagen: EnsaladaImagen6,
      descripcion: "Pomada para cejas acabado matte",
      precio: 15,
      cantidad: 0,
      total: 0,
      categoria: "Maquillaje"

    },
    {
      id: 7,
      nombreProducto: "Pista",
      imagen: EnsaladaImagen7,
      descripcion: "Pista de carrera",
      precio: 50,
      cantidad: 0,
      total: 0,
      categoria: "Juguetes"

    },
    {
      id: 8,
      nombreProducto: "Heladeria",
      imagen: EnsaladaImagen8,
      descripcion: "Heladeria con accesorios",
      precio: 30,
      cantidad: 0,
      total: 0,
      categoria: "Juguetes"

    },
    {
      id: 9,
      nombreProducto: "Cocina",
      imagen: EnsaladaImagen9,
      descripcion: "Cocina con accesorios",
      precio: 35,
      cantidad: 0,
      total: 0,
      categoria: "Juguetes"

    },
    {
      id: 10,
      nombreProducto: "Hidratante",
      imagen: EnsaladaImagen10,
      descripcion: "Hidratante",
      precio: 35,
      cantidad: 0,
      total: 0,
      categoria: "Skincare"

    },
    {
      id: 11,
      nombreProducto: "Serum",
      imagen: EnsaladaImagen11,
      descripcion: "Serum de niacinamida",
      precio: 40,
      cantidad: 0,
      total: 0,
      categoria: "Skincare"

    },
    {
      id: 12,
      nombreProducto: "Foreo",
      imagen: EnsaladaImagen12,
      descripcion: "Limpiador facial",
      precio: 40,
      cantidad: 0,
      total: 0,
      categoria: "Skincare"

    }
  ]
  const [productos, setProductos] = useState([])

  useEffect(() => {
    setProductos(
      [
        {
          id: 1,
          nombreProducto: "Sueter",
          imagen: EnsaladaImagen,
          descripcion: "sueter mangar larga",
          precio: 45,
          cantidad: 0,
          total: 0,
          categoria: "Ropa"
        },
        {
          id: 2,
          nombreProducto: "Sueter",
          imagen: EnsaladaImagen2,
          descripcion: "sueter con apertura ",
          precio: 40,
          cantidad: 0,
          total: 0,
          categoria: "Ropa"
        },
        {
          id: 3,
          nombreProducto: "Top",
          imagen: EnsaladaImagen3,
          descripcion: "Top estilo tejido",
          precio: 50,
          cantidad: 0,
          total: 0,
          categoria: "Ropa"

        },
        {
          id: 4,
          nombreProducto: "Corrector de Ojeras",
          imagen: EnsaladaImagen4,
          descripcion: "Corrector de ojeras hidratante",
          precio: 20,
          cantidad: 0,
          total: 0,
          categoria: "Maquillaje"

        },
        {
          id: 5,
          nombreProducto: "Polvo suelto",
          imagen: EnsaladaImagen5,
          descripcion: "Polvo suelto con acabado matte",
          precio: 25,
          cantidad: 0,
          total: 0,
          categoria: "Maquillaje"

        },
        {
          id: 6,
          nombreProducto: "Pomada para cejas",
          imagen: EnsaladaImagen6,
          descripcion: "Pomada para cejas acabado matte",
          precio: 15,
          cantidad: 0,
          total: 0,
          categoria: "Maquillaje"

        },
        {
          id: 7,
          nombreProducto: "Pista",
          imagen: EnsaladaImagen7,
          descripcion: "Pista de carrera",
          precio: 50,
          cantidad: 0,
          total: 0,
          categoria: "Juguetes"

        },
        {
          id: 8,
          nombreProducto: "Heladeria",
          imagen: EnsaladaImagen8,
          descripcion: "Heladeria con accesorios",
          precio: 30,
          cantidad: 0,
          total: 0,
          categoria: "Juguetes"

        },
        {
          id: 9,
          nombreProducto: "Cocina",
          imagen: EnsaladaImagen9,
          descripcion: "Cocina con accesorios",
          precio: 35,
          cantidad: 0,
          total: 0,
          categoria: "Juguetes"

        },
        {
          id: 10,
          nombreProducto: "Hidratante",
          imagen: EnsaladaImagen10,
          descripcion: "Hidratante",
          precio: 35,
          cantidad: 0,
          total: 0,
          categoria: "Skincare"

        },
        {
          id: 11,
          nombreProducto: "Serum",
          imagen: EnsaladaImagen11,
          descripcion: "Serum de niacinamida",
          precio: 40,
          cantidad: 0,
          total: 0,
          categoria: "Skincare"

        },
        {
          id: 12,
          nombreProducto: "Foreo",
          imagen: EnsaladaImagen12,
          descripcion: "Limpiador facial",
          precio: 40,
          cantidad: 0,
          total: 0,
          categoria: "Skincare"

        }
      ]
    )
  }, [])

  const { nombre, codigoPostal, estado, municpio, region, calle, numeroExterior, numeroInterior, correo, telefono } = direccionEntrega

  const { numeroTarjeta, nombreCompleto, fecha, codigoSeguridad } = datosTarjeta

  const agregarProductoCarrito = producto => {
    const productoExiste = carrito.find(item => item.id === producto.id)
    if (productoExiste) {
      productoExiste.cantidad = productoExiste.cantidad + 1
      productoExiste.total = productoExiste.precio * productoExiste.cantidad
      return
    }
    producto.cantidad = 1
    producto.total = producto.precio
    setCarrito([...carrito, producto])


  }

  const handleClose = () => {
    setOpen(false)
  }
  const steps = ['Carrito de compras', 'Dirección de entrega', 'Datos de tarjeta']

  const sumarTotal = () => carrito.reduce((suma, productoIndex) => productoIndex.total + suma, 0)


  const [activeStep, setActiveStep] = useState(0)
  const [skipped, setSkipped] = useState(new Set())


  const isStepSkipped = (step) => {
    return skipped.has(step)
  }

  const handleNext = async () => {
    if (activeStep + 1 === 3) {

      try {
        const { data } = await api.post('/api/correos', { carrito, direccionEntrega })
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped(newSkipped)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }


  const handleReset = () => {
    setOpen(false)
    setCarrito([])
    setDireccionEntrega({
      nombre: "",
      codigoPostal: "",
      estado: "",
      municpio: "",
      region: "",
      calle: "",
      numeroExterior: "",
      numeroInterior: "",
      correo: "",
      telefono: ""
    })
    setDatosTarjeta({
      numeroTarjeta: "",
      nombreCompleto: "",
      fecha: "",
      codigoSeguridad: ""
    })
    setActiveStep(0)
  }

  const aumentarCantidad = (producto) => {
    const nuevoCarrito = carrito.map(item => {
      if (item.id === producto.id) {
        return { ...item, cantidad: item.cantidad + 1, total: (item.cantidad + 1) * item.precio }
      }
      return item
    })

    setCarrito(nuevoCarrito)
  }

  const disminuirCantidad = (producto) => {
    const nuevoCarrito = carrito.map(item => {
      if (item.id === producto.id) {
        if (item.cantidad <= 1) return item
        return { ...item, cantidad: item.cantidad - 1, total: (item.cantidad - 1) * item.precio }
      }
      return item
    })

    setCarrito(nuevoCarrito)
  }

  const onChangeDireccion = (e) => {
    setDireccionEntrega({ ...direccionEntrega, [e.target.name]: e.target.value })
  }

  const onChangeTarjeta = (e) => {
    setDatosTarjeta({ ...datosTarjeta, [e.target.name]: e.target.value })
  }

  const filtrarProductos = (categoria) => {
    const productosFiltrados = productosCopia.filter((producto) =>
      producto.categoria.includes(categoria)
    )
    setProductos(productosFiltrados)
  }

  const resetearProductos = () => {
    setProductos(productosCopia)
  }

  return (
    <>
      <Header />
      <Nosotros />
      <div className="contenedor-main contenedor" id="menu">
        <section className="menu contenedor">
          <h2 className="texto-platillos">Productos populares</h2>
          <div className="botones-platillos">
            <button className="todos btn btn-verde" onClick={() => resetearProductos()}>Todos</button>
            <button className="ensaladas btn btn-verde" onClick={() => filtrarProductos("Ropa")}>Ropa</button>
            <button className="pasta btn btn-verde" onClick={() => filtrarProductos("Maquillaje")}>Maquillaje</button>
            <button className="pizza btn btn-verde" onClick={() => filtrarProductos("Juguetes")}>Juguetes</button>
            <button className="postres btn btn-verde" onClick={() => filtrarProductos("Skincare")}>Skincare</button>
          </div>
          <div className="platillos">
            {
              productos.map(producto => (
                <div className="platillo" key={producto.id}>
                  <img src={producto.imagen} alt="ensalada" />
                  <h2>{producto.nombreProducto}</h2>
                  <p>{producto.descripcion}</p>
                  <div className="precio">
                    <p>{formatearMoneda(producto.precio)}</p>
                    <button className="boton-compra" onClick={() => agregarProductoCarrito(producto)}><i className="fas fa-shopping-basket"></i></button>
                  </div>
                </div>
              ))
            }

          </div>
        </section>

        <div className="carrito-compras" onClick={() => setOpen(true)}>
          <i className="fas fa-shopping-cart"></i>
          <p className="color-cantidad">{carrito.length}</p>
        </div>

        <Dialog
          fullWidth
          maxWidth="sm"
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>Detalles de compras</Typography>
          </DialogTitle>

          <DialogContent>
            <Box sx={{ width: '100%' }}>
              <Stepper sx={{
                backgroundColor: "#fff",
                marginBottom: "20px",
                "& .MuiSvgIcon-root": { fontSize: "25px" },
                "& .MuiStepIcon-text": { fontSize: "15px !important" },
                "& .MuiStepLabel-iconContainer .Mui-active": { color: "#FF69B4" },
                "& .Mui-disabled .MuiStepIcon-root": { color: "#e0e0e0" },
                "& .MuiStepLabel-iconContainer .Mui-completed": { color: "#FF69B4" },
              }} activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {}
                  const labelProps = {}

                  if (isStepSkipped(index)) {
                    stepProps.completed = false
                  }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  )
                })}
              </Stepper>
              {activeStep === steps.length ? (
                <>
                  <Box sx={{ marginTop: "30px", width: "100%", backgroundColor: "#fff", padding: "40px    " }}>
                    <Box sx={{ textAlign: "center", marginTop: "30px" }}>
                      <CheckCircleIcon sx={{ fontSize: { xs: "80px", sm: "100px" }, color: "#3ABB47", borderRadius: "50%" }} />
                      <Typography sx={{ mt: 2, mb: 1, fontWeight: "bold", fontSize: { xs: "24px", sm: "30px" } }}>
                        Compra realizada con exito
                      </Typography>
                      <Typography sx={{ mt: 2, mb: 1, fontSize: { xs: "16px", sm: "20px" } }}>
                        Te llegara un correo de confirmación
                      </Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    {activeStep + 1}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button sx={{
                      fontSize: "15px"
                    }} onClick={handleReset}>Volver al inicio</Button>
                  </Box>
                </>
              ) : (
                <>
                  {activeStep + 1 === 1 && (
                    <>
                      {carrito.map(producto => (
                        <>
                          <Box
                            sx={{
                              display: "grid",
                              gridTemplateColumns: "repeat(5,1fr)"
                            }}
                            key={producto.id}>
                            <Box>
                              <img style={{ width: "100px" }} src={producto.imagen} />
                            </Box>
                            <Box sx={{ marginLeft: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <Typography sx={{ fontSize: "20px" }}>{producto.nombreProducto}</Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>{formatearMoneda(producto.total)}</Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>{producto.cantidad}</Typography>
                            </Box>
                            <Box
                              sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <Button sx={{
                                fontSize: "25px"
                              }}
                                onClick={() => aumentarCantidad(producto)}>
                                +
                              </Button>
                              <Button
                                sx={{
                                  fontSize: "25px"
                                }}
                                onClick={() => disminuirCantidad(producto)}>-</Button>
                            </Box>
                          </Box>

                        </>
                      ))}
                      <Box>
                        <Typography sx={{ fontSize: "20px", marginTop: "20px" }}><b>Total:</b> {formatearMoneda(sumarTotal())}</Typography>
                      </Box>
                    </>
                  )}

                  {activeStep + 1 === 2 && (
                    <Box
                      component="form"
                      display="grid"
                      gridTemplateColumns="repeat(2,1fr)"
                      columnGap="10px"
                    >
                      <FormControl
                        variant="standard"
                        sx={{
                          width: "100%"
                        }}
                      >
                        <InputLabel shrink sx={{
                          fontSize: "20px",
                          color: "#000",
                        }}>
                          Nombre completo
                        </InputLabel>

                        <OutlinedInput
                          name="nombre"
                          sx={{
                            marginTop: "30px",
                            marginBottom: "30px",
                            fontSize: "14px"
                          }}
                          placeholder="Ingresa el nombre completo"
                          value={nombre}
                          onChange={(e) => onChangeDireccion(e)}
                        />

                      </FormControl>

                      <FormControl
                        variant="standard"
                        sx={{
                          width: "100%"
                        }}
                      >
                        <InputLabel shrink sx={{
                          fontSize: "20px",
                          color: "#000",
                        }}>
                          Código postal
                        </InputLabel>

                        <OutlinedInput
                          name="codigoPostal"
                          sx={{
                            marginTop: "30px",
                            marginBottom: "30px",
                            fontSize: "14px"
                          }}
                          placeholder="Ingresa el código"
                          value={codigoPostal}
                          onChange={(e) => onChangeDireccion(e)}
                        />

                      </FormControl>


                      <FormControl
                        variant="standard"
                        sx={{
                          width: "100%"
                        }}
                      >
                        <InputLabel shrink sx={{
                          fontSize: "20px",
                          color: "#000",
                        }}>
                          Estado
                        </InputLabel>

                        <OutlinedInput
                          name="estado"
                          sx={{
                            marginTop: "30px",
                            marginBottom: "30px",
                            fontSize: "14px"
                          }}
                          placeholder="Ingresa el estado"
                          value={estado}
                          onChange={(e) => onChangeDireccion(e)}
                        />

                      </FormControl>

                      <FormControl
                        variant="standard"
                        sx={{
                          width: "100%"
                        }}
                      >
                        <InputLabel shrink sx={{
                          fontSize: "20px",
                          color: "#000",
                        }}>
                          Municipio
                        </InputLabel>

                        <OutlinedInput
                          name="municpio"
                          sx={{
                            marginTop: "30px",
                            marginBottom: "30px",
                            fontSize: "14px"
                          }}
                          placeholder="Ingresa el municipio"
                          value={municpio}
                          onChange={(e) => onChangeDireccion(e)}
                        />

                      </FormControl>


                      <FormControl
                        variant="standard"
                        sx={{
                          width: "100%"
                        }}
                      >
                        <InputLabel shrink sx={{
                          fontSize: "20px",
                          color: "#000",
                        }}>
                          Región
                        </InputLabel>

                        <OutlinedInput
                          name="region"
                          sx={{
                            marginTop: "30px",
                            marginBottom: "30px",
                            fontSize: "14px"
                          }}
                          placeholder="Ingresa la región"
                          value={region}
                          onChange={(e) => onChangeDireccion(e)}
                        />

                      </FormControl>

                      <FormControl
                        variant="standard"
                        sx={{
                          width: "100%"
                        }}
                      >
                        <InputLabel shrink sx={{
                          fontSize: "20px",
                          color: "#000",
                        }}>
                          Calle
                        </InputLabel>

                        <OutlinedInput
                          name="calle"
                          sx={{
                            marginTop: "30px",
                            marginBottom: "30px",
                            fontSize: "14px"
                          }}
                          placeholder="Ingresa la calle"
                          value={calle}
                          onChange={(e) => onChangeDireccion(e)}
                        />

                      </FormControl>

                      <FormControl
                        variant="standard"
                        sx={{
                          width: "100%"
                        }}
                      >
                        <InputLabel shrink sx={{
                          fontSize: "20px",
                          color: "#000",
                        }}>
                          Número exterior
                        </InputLabel>

                        <OutlinedInput
                          name="numeroExterior"
                          sx={{
                            marginTop: "30px",
                            marginBottom: "30px",
                            fontSize: "14px"
                          }}
                          placeholder="Ingresa el número exterior"
                          value={numeroExterior}
                          onChange={(e) => onChangeDireccion(e)}
                        />

                      </FormControl>

                      <FormControl
                        variant="standard"
                        sx={{
                          width: "100%"
                        }}
                      >
                        <InputLabel shrink sx={{
                          fontSize: "20px",
                          color: "#000",
                        }}>
                          Nº interior/Depto (opcional)
                        </InputLabel>

                        <OutlinedInput
                          name="numeroInterior"
                          sx={{
                            marginTop: "30px",
                            marginBottom: "30px",
                            fontSize: "14px"
                          }}
                          placeholder="Ingresa el número interior"
                          value={numeroInterior}
                          onChange={(e) => onChangeDireccion(e)}
                        />

                      </FormControl>

                      <FormControl
                        variant="standard"
                        sx={{
                          width: "100%"
                        }}
                      >
                        <InputLabel shrink sx={{
                          fontSize: "20px",
                          color: "#000",
                        }}>
                          Correo
                        </InputLabel>

                        <OutlinedInput
                          name="correo"
                          sx={{
                            marginTop: "30px",
                            marginBottom: "30px",
                            fontSize: "14px"
                          }}
                          placeholder="Ingresa el correo"
                          value={correo}
                          onChange={(e) => onChangeDireccion(e)}
                        />

                      </FormControl>


                      <FormControl
                        variant="standard"
                        sx={{
                          width: "100%"
                        }}
                      >
                        <InputLabel shrink sx={{
                          fontSize: "20px",
                          color: "#000",
                        }}>
                          Télefono de contacto
                        </InputLabel>

                        <OutlinedInput
                          name="telefono"
                          sx={{
                            marginTop: "30px",
                            marginBottom: "30px",
                            fontSize: "14px"
                          }}
                          placeholder="Ingresa el télefono"
                          value={telefono}
                          onChange={(e) => onChangeDireccion(e)}
                        />

                      </FormControl>

                    </Box>

                  )}

                  {activeStep + 1 === 3 && (
                    <Box
                      component="form"
                      display="grid"
                      gridTemplateColumns="repeat(2,1fr)"
                      columnGap="10px"
                    >
                      <FormControl
                        variant="standard"
                        sx={{
                          width: "100%"
                        }}
                      >
                        <InputLabel shrink sx={{
                          fontSize: "20px",
                          color: "#000",
                        }}>
                          Número de tarjeta
                        </InputLabel>

                        <OutlinedInput
                          name="numeroTarjeta"
                          sx={{
                            marginTop: "30px",
                            marginBottom: "30px",
                            fontSize: "14px"
                          }}
                          placeholder="Ingresa el número de tarjeta"
                          value={numeroTarjeta}
                          onChange={(e) => onChangeTarjeta(e)}
                        />

                      </FormControl>

                      <FormControl
                        variant="standard"
                        sx={{
                          width: "100%"
                        }}
                      >
                        <InputLabel shrink sx={{
                          fontSize: "20px",
                          color: "#000",
                        }}>
                          Nombre y apellido
                        </InputLabel>

                        <OutlinedInput
                          name="nombreCompleto"
                          sx={{
                            marginTop: "30px",
                            marginBottom: "30px",
                            fontSize: "14px"
                          }}
                          placeholder="Ingresa el número de tarjeta"
                          value={nombreCompleto}
                          onChange={(e) => onChangeTarjeta(e)}
                        />
                      </FormControl>

                      <FormControl
                        variant="standard"
                        sx={{
                          width: "100%"
                        }}
                      >
                        <InputLabel shrink sx={{
                          fontSize: "20px",
                          color: "#000",
                        }}>
                          Fecha de vencimiento
                        </InputLabel>

                        <OutlinedInput
                          name="fecha"
                          sx={{
                            marginTop: "30px",
                            marginBottom: "30px",
                            fontSize: "14px"
                          }}
                          type="date"
                          placeholder="Ingresa el número de tarjeta"
                          value={fecha}
                          onChange={(e) => onChangeTarjeta(e)}
                        />
                      </FormControl>

                      <FormControl
                        variant="standard"
                        sx={{
                          width: "100%"
                        }}
                      >
                        <InputLabel shrink sx={{
                          fontSize: "20px",
                          color: "#000",
                        }}>
                          Código de seguridad
                        </InputLabel>

                        <OutlinedInput
                          name="codigoSeguridad"
                          sx={{
                            marginTop: "30px",
                            marginBottom: "30px",
                            fontSize: "14px"
                          }}
                          placeholder="Ingresa el número de tarjeta"
                          value={codigoSeguridad}
                          onChange={(e) => onChangeTarjeta(e)}
                        />
                      </FormControl>




                    </Box>
                  )}
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1, fontSize: "15px" }}
                    >
                      Atras
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />

                    <Button
                      sx={{
                        fontSize: "15px"
                      }}
                      onClick={handleNext}>
                      {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                    </Button>
                  </Box>
                </>
              )}
            </Box>
          </DialogContent>
        </Dialog>
      </div>
      <Separador />
      <Seccion />
      <Contacto />
      <Informacion />
      <Footer />
    </>

  )
}

export default App
