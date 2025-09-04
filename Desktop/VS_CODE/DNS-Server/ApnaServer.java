import java.io.*;
import java.net.*;
class ApnaServer{
    public static void main(String [] args){
        try{
            ServerSocket ss = new ServerSocket(5555);
            Socket s = ss.accept();
            DataInputStream diss = new DataInputStream(s.getInputStream());
            String str = diss.readUTF();
            System.out.println("Message received from client: " + str);
        }
        catch(Exception e){
            System.out.println("An error occurred in client:");
            e.printStackTrace();
            
        }
    }
}