package griha.co.in;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.UnsupportedEncodingException;

import javax.servlet.http.*;

import java.util.Properties;
import java.util.logging.Logger;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;


@SuppressWarnings("serial")
public class GrihaServlet extends HttpServlet {
	
	public GrihaServlet()
	  {
	    super();
	  }

	public void doPost(HttpServletRequest req, HttpServletResponse resp)
	{
		Logger log = Logger.getLogger(GrihaServlet.class.getName());
		
		StringBuffer sb = new StringBuffer();
		try
		{
			BufferedReader reader = req.getReader();
			String line = null;
			while ((line = reader.readLine()) != null)
			{
				sb.append(line);
			}

			JSONParser parser = new JSONParser();
		    JSONObject joUser = null;
		    
		    joUser = (JSONObject) parser.parse(sb.toString());

		String email = joUser.get("email").toString();
		String phone = joUser.get("phone").toString();
		String messageBody = joUser.get("message").toString();
		String name = joUser.get("name").toString();
		String propertyName = joUser.get("propertyName").toString();
		
		Properties props = new Properties();
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "587");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		
		Session session = Session.getInstance(props, new javax.mail.Authenticator(){
			protected PasswordAuthentication getPasswordAuthentication(){
				return new PasswordAuthentication("info@griha.co.in", "snowman@1");
			}
		});
		
		//Session session = Session.getDefaultInstance(props, null);
		
		StringBuilder sbMessage = new StringBuilder();
		sbMessage.append("Name :");
		sbMessage.append(name);
		sbMessage.append("\n");
		sbMessage.append("Phone :");
		sbMessage.append(phone);
		sbMessage.append("\n");
		sbMessage.append("Email :");
		sbMessage.append(email);
		sbMessage.append("\n");
		sbMessage.append(messageBody);
		
		log.info(sbMessage.toString());
		
		//String msgBody = "...";
		
		String subject = name + " has expressed interest in property " + propertyName;
		
		
		    Message msg = new MimeMessage(session);
		    msg.setFrom(new InternetAddress("info@griha.co.in", "Info griha.co.in"));
		    msg.addRecipient(Message.RecipientType.TO,
		     new InternetAddress("contactus@griha.co.in", "Contact Us"));
		    msg.setSubject(subject);
		    msg.setText(sbMessage.toString());
		    Transport.send(msg);
		    resp.setContentType("text/plain");
			resp.getWriter().println("Mail send successfully");
			resp.setStatus(200);
			log.info("Email send successfully");
		} 
		catch (AddressException e) {
			resp.setStatus(403);
			//e.printStackTrace();
			log.severe(e.toString());
			
		} 
		catch (MessagingException e) {
			resp.setStatus(403);
			log.severe(e.toString());
		}
		catch (ParseException e) 
		{ 
			e.printStackTrace(); 
		}
		catch (UnsupportedEncodingException e) {
			resp.setStatus(403);
			log.severe(e.toString());
		} catch (IOException e) {
			resp.setStatus(403);
			log.severe(e.toString());
		}catch (Exception e) {
			resp.setStatus(403);
			log.severe(e.toString());
		}

	}
}
