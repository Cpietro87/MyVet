import { Request, Response } from "express";
import {VentaService} from "../services/VentasService";

class VentaControllers{

  async handleCreateVenta(request: Request, response: Response) {
      const {  numero, tipo, sucursal,cuit, cuil,consulta,precio,codigoproducto,cantidad,formapago} = request.body;
      const createVentaService = new VentaService();
  
      try {
        await createVentaService.create({
          numero,
          tipo, 
          sucursal,
          cuit, 
          cuil,
          consulta,
          precio,
          codigoproducto,
          cantidad,
          formapago
        }).then(() => {
          response.render("Client/messageClient", {
            message: "La venta se ha registrado exitosamente"
          });
        });
      } catch (err) {
        response.render("Client/messageClient", {
          message: `Error al registrar venta: ${err.message}`
        });
      }
  }
  async handleDeleteVenta(request: Request, response: Response) {
    const { id } = request.body;

    const deleteVentaService = new VentaService();

    try {
        await deleteVentaService.delete(id).then(() => {
        response.render("Client/messageClient", {
          message: "Venta eliminado correctamente"
        });
      });
    } catch (err) {
      response.render("Client/message", {
        message: `Error al eliminar venta: ${err.message}`
      });
    }
  } 
  async handleGetVenta(request: Request, response: Response) {
    let { id } = request.query;
    id = id.toString();

    const getVentaDataService = new VentaService();            
    const venta = await getVentaDataService.getData(id);

    return response.render("Client/editClient", {
      venta: venta
    }); 
  } 
  async handleListVenta(request: Request, response: Response) {
    const listVentaService = new VentaService();
    const venta = await listVentaService.list();

    return response.render("Ventas/Ventas", {
      venta: venta
    });
  }
  async handleSearchVenta(request: Request, response: Response) {
    let { search } = request.query;
    search = search.toString();
    const searchVentaService = new VentaService();

    try {
      const venta = await searchVentaService.search(search);
      response.render("search", {
        venta: venta,
        search: search
      });
    } catch (err) {
      response.render("Client/message", {
        message: `Error al buscar venta: ${err.message}`
      });
    }
  }
 
}
export {VentaControllers};