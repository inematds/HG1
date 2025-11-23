# read_sensors.py
# Este exemplo demonstra como ler dados dos sensores do Unitree G1 usando o SDK Python.

import unitree_sdk2_python as unitree_sdk
import time

def main():
    # Inicializa a comunicação com o robô
    # O endereço IP 192.168.123.164 é o do PC2 do G1 EDU
    channel = unitree_sdk.Channel("192.168.123.164")

    # Cria um cliente para o serviço de estado do robô
    state_client = unitree_sdk.RobotStateClient(channel)

    print("Conectado ao robô. Lendo dados dos sensores...")

    try:
        while True:
            # Solicita o estado atual do robô
            state = state_client.service()

            # Imprime a posição e velocidade de uma das juntas do braço (exemplo)
            # A sequência e os índices das juntas podem ser encontrados na documentação
            if state.arm_state:
                joint_name = "Elbow_l" # Exemplo com o cotovelo esquerdo
                joint_index = 2 # Índice de exemplo
                position = state.arm_state.q[joint_index]
                velocity = state.arm_state.dq[joint_index]
                print(f"Junta: {joint_name}, Posição: {position:.4f} rad, Velocidade: {velocity:.4f} rad/s")

            # Imprime dados do IMU
            if state.imu_state:
                accel = state.imu_state.accelerometer
                gyro = state.imu_state.gyroscope
                print(f"Acelerômetro: x={accel[0]:.4f}, y={accel[1]:.4f}, z={accel[2]:.4f}")
                print(f"Giroscópio: x={gyro[0]:.4f}, y={gyro[1]:.4f}, z={gyro[2]:.4f}")
            
            print("---")
            time.sleep(1) # Aguarda 1 segundo antes da próxima leitura

    except KeyboardInterrupt:
        print("\nPrograma encerrado pelo usuário.")
    finally:
        # Encerra a comunicação
        channel.release()
        print("Comunicação com o robô encerrada.")

if __name__ == "__main__":
    main()
