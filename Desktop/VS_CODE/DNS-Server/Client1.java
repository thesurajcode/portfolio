import java.io.*;
public class Client1{
    public static void main(String [] args){
        try{
            BufferedReader br = new BufferedReader(new FileReader("vansh.txt"));
            String line;
            while ((line = br.readLine()) != null){
                System.out.println(line);
            }
            br.close();

        
        }catch( IOException e){
            e.printStackTrace();
        }
    
    }

}