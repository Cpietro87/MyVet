import { Request, Response } from "express";
import {MedicamentoService} from "../services/MedicamentoService";

class MedicamentoControllers{

  async CreateMedicamento(request: Request, response: Response) {
      const { mediname, tipo, dosis, precio, vencimiento } = request.body;
      const createMedicamentoService = new MedicamentoService();
  
      try {
        await createMedicamentoService.create({
          mediname,
          tipo,
          dosis,
          precio,
          vencimiento
        }).then(() => {
          response.render("Empleados/message", {
            message: "Medicamento ingresado exitosamente"
          });
        });
      } catch (err) {
        response.render("Empleados/message", {
          message: `Error al registrar : ${err.message}`
        });
      }
  }
  async DeleteMedicamento(request: Request, response: Response) {
    const { id } = request.body;

    const deleteMedicamentoService = new MedicamentoService();

    try {
        await deleteMedicamentoService.delete(id).then(() => {
        response.render("Empleados/message", {
          message: " Eliminado correctamente"
        });
      });
    } catch (err) {
      response.render("Empleados/message", {
        message: `Error al eliminar : ${err.message}`
      });
    }
  } 
  async GetMedicamento(request: Request, response: Response) {
    let { id } = request.query;
    id = id.toString();

    const getMedicamentoDataService = new MedicamentoService();            
    const medicamento = await getMedicamentoDataService.getData(id);

    return response.render("Medicamentos/editMedica", {
      medicamento: medicamento
    }); 
  } 
  async ListMedicamento(request: Request, response: Response) {
    const listMedicamentoService = new MedicamentoService();
    const medicamento = await listMedicamentoService.list();

    return response.render("Medicamentos/Medicamentos", {
      medicamento: medicamento
    });
  }
  async SearchMedicamento(request: Request, response: Response) {
    let { search } = request.query;
    search = search.toString();
    const searchMedicamentoService = new MedicamentoService();

    try {
      const medicamento = await searchMedicamentoService.search(search);
      response.render("Empleados/search", {
        medicamento: medicamento,
        search: search
      });
    } catch (err) {
      response.render("Empleados/message", {
        message: `Error al buscar usuario: ${err.message}`
      });
    }
  }
  async UpdateMedicamento(request: Request, response: Response) {
    const { id, mediname, tipo, dosis, precio, vencimiento } = request.body;
    const updateMedicamentoService = new MedicamentoService();

    try {
      await updateMedicamentoService.update({ id, mediname, tipo, dosis, precio, vencimiento }).then(() => {
        response.render("Empleados/message", {
          message: "Usuario actualizado correctamente"
        });
      });
    } catch (err) {
      response.render("Empleados/message", {
        message: `Error al actualizar usuario: ${err.message}`
      });
    }

  }
}
export {MedicamentoControllers};