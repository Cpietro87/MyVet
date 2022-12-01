import { Request, Response } from "express";
import {ServicioService} from "../services/ServicioSevice";

class ServicioControllers{

  async handleCreateServicio(request: Request, response: Response) {
      const { codigo,tipo,precio  } = request.body;
      const createServicioService = new ServicioService();
  
      try {
        await createServicioService.create({
            codigo,tipo,precio 
        }).then(() => {
          response.render("Client/messageClient", {
            message: "Servicio registrado exitosamente"
          });
        });
      } catch (err) {
        response.render("Client/messageClient", {
          message: `Error al registrar cliente: ${err.message}`
        });
      }
  }
  async handleDeleteServicio(request: Request, response: Response) {
    const { id} = request.body;

    const deleteServicioService = new ServicioService();

    try {
        await deleteServicioService.delete(id).then(() => {
        response.render("Client/messageClient", {
          message: "Eliminado correctamente"
        });
      });
    } catch (err) {
      response.render("Client/message", {
        message: `Error al eliminar cliente: ${err.message}`
      });
    }
  } 
  async handleGetServicio(request: Request, response: Response) {
    let { id } = request.query;
    id = id.toString();

    const getClientDataService = new ServicioService();            
    const servicio = await getClientDataService.getData(id);

    return response.render("Client/editClient", {
      servicio: servicio
    }); 
  } 
  async handleListServicio(request: Request, response: Response) {
    const listServicioService = new ServicioService();
    const servicio = await listServicioService.list();

    return response.render("Sevice/Service", {
      servicio: servicio
    });
  }
  async handleSearchServicio(request: Request, response: Response) {
    let { search } = request.query;
    search = search.toString();
    const searchServicioService = new ServicioService();

    try {
      const servicio = await searchServicioService.search(search);
      response.render("search", {
        servicio: servicio,
        search: search
      });
    } catch (err) {
      response.render("Client/message", {
        message: `Error al buscar usuario: ${err.message}`
      });
    }
  }
  async handleUpdateServicio(request: Request, response: Response) {
    const { id,codigo,tipo,precio  } = request.body;
    const updateServicioService = new ServicioService();

    try {
      await updateServicioService.update({id,codigo,tipo,precio }).then(() => {
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
export {ServicioControllers};