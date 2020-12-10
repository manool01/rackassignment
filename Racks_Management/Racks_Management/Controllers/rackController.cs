using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Racks_Management.Models;
using System.Web.Http.Cors;

namespace Racks_Management.Controllers
{
    [EnableCors(origins: "http://localhost:4200" , headers: "*", methods: "*")]
    public class rackController : ApiController
    {
        private rackModel db = new rackModel();

        // GET: api/rack
        public IQueryable<rack_inventory> Getrack_inventory()
        {
            return db.rack_inventory;
        }

        // GET: api/rack/5
        [ResponseType(typeof(rack_inventory))]
        public IHttpActionResult Getrack_inventory(int id)
        {
            rack_inventory rack_inventory = db.rack_inventory.Find(id);
            if (rack_inventory == null)
            {
                return NotFound();
            }

            return Ok(rack_inventory);
        }

        // PUT: api/rack/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putrack_inventory(int id, rack_inventory rack_inventory)
        {
          

            if (id != rack_inventory.R_id)
            {
                return BadRequest();
            }

            db.Entry(rack_inventory).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!rack_inventoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/rack
        [ResponseType(typeof(rack_inventory))]
        public IHttpActionResult Postrack_inventory(rack_inventory rack_inventory)
        {
           

            db.rack_inventory.Add(rack_inventory);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (rack_inventoryExists(rack_inventory.R_id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = rack_inventory.R_id }, rack_inventory);
        }

        // DELETE: api/rack/5
        [ResponseType(typeof(rack_inventory))]
        public IHttpActionResult Deleterack_inventory(int id)
        {
            rack_inventory rack_inventory = db.rack_inventory.Find(id);
            if (rack_inventory == null)
            {
                return NotFound();
            }

            db.rack_inventory.Remove(rack_inventory);
            db.SaveChanges();

            return Ok(rack_inventory);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool rack_inventoryExists(int id)
        {
            return db.rack_inventory.Count(e => e.R_id == id) > 0;
        }
    }
}