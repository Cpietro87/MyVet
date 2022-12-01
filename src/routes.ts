import { request, Router } from "express";
import {UserControllers} from "./controllers/UserControllers";
import ProductControllers from "./controllers/ProductControllers";
import CategoryControllers from "./controllers/CategoryControllers";
import { LoginControllers } from "./controllers/LoginControllers";
import  PatientControllers  from "./controllers/PatientControllers";
import { ClientControllers } from "./controllers/ClientControllers";
import { MedicalControllers} from "./controllers/MedicalControllers";
import { QueryControllers } from "./controllers/QueryControllers";
import { ServicioControllers } from "./controllers/ServicioControllers";
import { validarJWT } from "./middlewares/validar-jwt";
import { VentaControllers } from "./controllers/VentasControllers";
import { MedicamentoControllers } from "./controllers/MedicamentoControllers";
import { TurnoControllers } from "./controllers/TurnoControllers";


//----------------------------Empleados--------------------------------------------
const router = Router();
const controllers = new UserControllers();
router.get("/profile", (request, response) => {
  response.render("profile");
});


router.get("/Usuarios",controllers.handleListUser);
router.get("/add", (request, response) => {
  response.render("Empleados/add");
});
router.get("/index", (request, response) => {
  response.render("index");
});
router.get("/navBar", (request, response) => {
  response.render("template/navBar");
});
router.post("/add-user", controllers.handleCreateUser);
router.get("/search", controllers.handleSearchUser);
router.get("/edit", controllers.handleGetUser);
router.post("/edit-user", controllers.handleUpdateUser);
router.post("/delete-user", controllers.handleDeleteUser);
//-------------------------------Productos------------------------------------------
const product = new ProductControllers();
router.get("/product", validarJWT,product.handleListProduct);
router.get("/addProduct", product.handleAddProduct);
router.post("/addProduct", product.handleCreateProduct);
router.get("/searchProduct", product.handleSearchProduct);
router.get("/editProduct", product.handleGetProduct);
router.post("/edit-product", product.handleUpdateProduct);
router.post("/delete-product", product.handleDeleteProduct);
//---------------------------------Categorias----------------------------------------
const category = new CategoryControllers();
router.get("/Category", validarJWT,category.handleListCategory);
router.get("/addCategory", (request, response) => {
  response.render("Category/addCategory");});
router.post("/addCategory", category.handleCreateCategory);
router.get("/searchCategory", category.handleSearchCategory);
router.get("/editCategory", category.handleGetCategory);
router.post("/edit-category", category.handleUpdateCategory);
router.post("/delete-category", category.handleDeleteCategory);
//---------------------------------Paciente-------------------------------------
const patient = new PatientControllers();

router.get("/listPaciente",validarJWT,patient.handleListPatient);
router.post("/addPaciente", patient.handleCreatePatient);
router.get("/addPaciente", patient.handleAddPatient);
router.get("/searchPaciente", patient.handleSearchPatient);
router.get("/editPatient", patient.handleGetPatient);
router.post("/edit-patient", patient.handleUpdatePatient);
router.post("/delete-patient", patient.handleDeletePatient);
//---------------------------------Sesion----------------------------------------
router.get("/card",(request,response) => {
  response.render("card");
})
const login = new LoginControllers();

router.get("/signUp", (request, response) => {
  response.render("Registro/signUp");
});
router.get("/", (request, response) => {
  response.render("Inicio/signIn");
});
router.post("/signUp",login.handleCreateSingUp);
router.post("/signIn", login.signInAutentication);
router.get("/ListLogin",login.handleListUser);
router.get("/searchRegistro", login.handleSearchUser);
router.get("/editLogin", login.handleGetUser);
router.post("/edit-Login", login.handleUpdateUser);
router.post("/deleteLogin", login.handleDeleteUser);
//----------------------Cliente-------------------------
const client = new ClientControllers();

router.get("/Client", validarJWT,client.handleListClient);
router.get("/addClient", (request, response) => {
  response.render("Client/addClient");});
router.post("/addClient", client.handleCreateClient);
router.post("/addClient", client.handleCreateClient);
router.get("/searchClient", client.handleSearchClient);
router.get("/editClient", client.handleGetClient);
router.post("/edit-client", client.handleUpdateClient);
router.post("/delete-client", client.handleDeleteClient);
//----------------------Consultas-------------------------------
const query = new QueryControllers();

router.get("/query",query.handleListQuery);
router.get("/addQuery", (request, response) => {
  response.render("Query/addQuery");});
router.post("/addQuery", query.handleCreateQuery);
router.post("/addQuery", query.handleCreateQuery);
router.get("/searchQuery", query.handleSearchQuery);
router.get("/editQuery", query.handleGetQuery);
router.post("/edit-query", query.handleUpdateQuery);
router.post("/delete-query", query.handleDeleteQuery);
//---------------------Medicos--------------------------------
const medical = new MedicalControllers();

router.get("/medical",medical.handleListMedical);
router.get("/addMedical", (request, response) => {
  response.render("Medical/addMedical")});
router.post("/addMedical",medical.handleCreateMedical);
router.get("/editMedical",medical.handleGetMedical)
//---------------------Servicios---------------------------
const servicio = new ServicioControllers();
router.get("/servicio",servicio.handleListServicio);
router.get("/addSevice", (request, response) => {
  response.render("Sevice/addService")});
router.post("/addService",servicio.handleCreateServicio);
router.post("/delete-servicio",servicio.handleDeleteServicio)
//---------------------Ventas------------------------------
const ventas = new VentaControllers();
router.get("/ventas",ventas.handleListVenta);
router.get("/addVentas", (request, response) => {
  response.render("Ventas/addVentas")});
router.post("/addVentas",ventas.handleCreateVenta);
router.post("/delete-venta",ventas.handleDeleteVenta);
//------------------Medicamentos--------------------------
const Medicamentos = new MedicamentoControllers();
router.get("/medicamentos",Medicamentos.ListMedicamento);
router.get("/addMedica", (request, response) => {
  response.render("Medicamentos/addMedica");});
router.post("/addMedica",Medicamentos.CreateMedicamento);
router.get("/editMedica",Medicamentos.GetMedicamento);
router.post("/edit-medica",Medicamentos.UpdateMedicamento);
router.post("/delete-medica",Medicamentos.DeleteMedicamento);
//---------------------Turnos-------------------------------
const turno = new TurnoControllers();
router.get("/turno",turno.handleListTurno);
router.get("/addTurno", (request, response) => {
  response.render("Turno/addTurno");});
router.post("/addTurno",turno.handleCreateTurno);

export { router };

