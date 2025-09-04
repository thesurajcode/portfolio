import java.io.*;
import java.net.*;
class ApnaClient{
    public static void main(String [] args){
        try{
            Socket s = new Socket("localhost",5555);
            DataOutputStream dout = new DataOutputStream(s.getOutputStream());
            dout.writeUTF( "Hello ");
            dout.flush();
            dout.close();
            s.close();
        }catch(Exception e){
            
        }
    }
}