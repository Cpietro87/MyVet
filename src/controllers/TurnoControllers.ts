import { Request, Response } from "express";
import {TurnoService} from "../services/TurnoService";

class TurnoControllers{

  async handleCreateTurno(request: Request, response: Response) {
      const { numero, paciente, propietario, fechaturno} = request.body;
      const createClientService = new TurnoService();
  
      try {
        await createClientService.create({
            numero, paciente, propietario, fechaturno,
        }).then(() => {
          response.render("Client/messageClient", {
            message: "Turno registrado exitosamente"
          });
        });
      } catch (err) {
        response.render("Client/messageClient", {
          message: `Error al registrar Turno: ${err.message}`
        });
      }
  }
  async handleDeleteTurno(request: Request, response: Response) {
    const { id } = request.body;

    const deleteTurnoService = new TurnoService();

    try {
        await deleteTurnoService.delete(id).then(() => {
        response.render("Client/messageClient", {
          message: "eliminado correctamente"
        });
      });
    } catch (err) {
      response.render("Client/message", {
        message: `Error al eliminar : ${err.message}`
      });
    }
  } 
  async handleGetturno(request: Request, response: Response) {
    let { id } = request.query;
    id = id.toString();

    const getTurnoDataService = new TurnoService();            
    const turno = await getTurnoDataService.getData(id);

    return response.render("Client/editClient", {
      turnno: turno
    }); 
  } 
  async handleListTurno(request: Request, response: Response) {
    const listTurnoService = new TurnoService();
    const turno = await listTurnoService.list();

    return response.render("Turno/Turno", {
      turno: turno
    });
  }
  async handleSearchTurno(request: Request, response: Response) {
    let { search } = request.query;
    search = search.toString();
    const searchTurnoService = new TurnoService();

    try {
      const turno = await searchTurnoService.search(search);
      response.render("search", {
        turno: turno,
        search: search
      });
    } catch (err) {
      response.render("Client/message", {
        message: `Error al buscar usuario: ${err.message}`
      });
    }
  }
  async handleUpdateTurno(request: Request, response: Response) {
    const {  id,numero, paciente, propietario, fechaturno, motivo} = request.body;
    const updateTurnoService = new TurnoService();

    try {
      await updateTurnoService.update({ id,numero, paciente, propietario, fechaturno}).then(() => {
        response.render("Client/messageClient", {
          message: "Cliente actualizado correctamente"
        });
      });
    } catch (err) {
      response.render("Client/messageClient", {
        message: `Error al actualizar Clinet: ${err.message}`
      });
    }

  }
}
export {TurnoControllers};