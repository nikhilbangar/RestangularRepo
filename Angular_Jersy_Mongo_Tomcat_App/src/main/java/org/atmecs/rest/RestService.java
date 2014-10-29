package org.atmecs.rest;

import java.net.UnknownHostException;
import java.util.LinkedList;
import java.util.Map;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.atmecs.service.SpreadService;

import com.mongodb.BasicDBObject;

/***
 * 
 * @author Nikhil
 * @date 10-oct-2014
 * @description : this class defines rest full api
 */

@Path("/qascript")
public class RestService {
	@GET
	@Path("/get")
	@Produces(MediaType.APPLICATION_JSON)
	public LinkedList<Map<String, Object>> getSpreadDataInJSON()
			throws UnknownHostException {
		SpreadService spreadService = new SpreadService();
		System.out.println("sbafs");
		return spreadService.getSpreadData();
	}

	@POST
	@Path("/post")
	// @Consumes({"application/json,text/plain,text/html"})
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void postSpreadSheetInJSON(BasicDBObject listOfObjects)
			throws UnknownHostException {
		System.out.println("list :" + listOfObjects);
		// System.out.println("list :" + listOfObjects);
		SpreadService service = new SpreadService();
		BasicDBObject basicDBObject = new BasicDBObject();
		basicDBObject.put("email", "fsdf@dfsdf");
		basicDBObject.put("username", "djkfsdf");
		basicDBObject.put("password", "paee");
		service.postUserData(basicDBObject);
		// service.postSpreadSheetData(listOfObjects);
		// System.out.println("inside post of QAScriptRestService : "+qaScript);
		// return Response.status(201).entity("sfs").build();
	}

	@POST
	@Path("/login")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public String login(BasicDBObject dbObject) {
		System.out.println("login has executed: "+dbObject);
		return "user";

	}
}