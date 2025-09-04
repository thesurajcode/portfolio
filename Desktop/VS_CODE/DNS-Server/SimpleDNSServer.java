import java.net.DatagramPacket;
import java.net.DatagramSocket;

public class SimpleDNSServer {
    public static void main(String[] args) {
        try {
            DatagramSocket socket = new DatagramSocket(53); // DNS servers usually listen on port 53
            byte[] buffer = new byte[512];

            System.out.println("DNS Server is running on port 53...");

            while (true) {
                DatagramPacket request = new DatagramPacket(buffer, buffer.length);
                socket.receive(request); // Receive DNS Query
                
                System.out.println("Received a DNS query from: " + request.getAddress());
                System.out.println("Query Data (Raw Bytes): " + bytesToHex(request.getData()));

                // (Next step me hum is request ko parse karenge)
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Helper function to convert bytes to hex for better readability
    private static String bytesToHex(byte[] bytes) {
        StringBuilder sb = new StringBuilder();
        for (byte b : bytes) {
            sb.append(String.format("%02X ", b));
        }
        return sb.toString();
    }
}
