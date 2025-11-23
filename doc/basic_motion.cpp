// basic_motion.cpp
// Este exemplo demonstra como enviar comandos de movimento básicos para o Unitree G1 usando o SDK C++.

#include "unitree/robot/channel/channel_publisher.hpp"
#include "unitree/robot/go2/sport/sport_client.hpp"
#include "unitree/common/time/time_tool.hpp"
#include <iostream>

int main(int argc, char** argv)
{
    // Inicializa a comunicação com o robô
    // O endereço IP 192.168.123.164 é o do PC2 do G1 EDU
    std::string robot_ip = "192.168.123.164";
    unitree::robot::ChannelPublisher<unitree::robot::go2::SportModeState> publisher(robot_ip);

    // Cria um cliente para o serviço de esporte (movimento)
    unitree::robot::go2::SportClient sport_client;
    sport_client.SetTimeout(10.0f);
    sport_client.Init(publisher);

    std::cout << "Conectado ao robô. Enviando comandos de movimento..." << std::endl;

    // Exemplo 1: Fazer o robô ficar em pé
    std::cout << "Comando: Ficar em pé" << std::endl;
    sport_client.StandUp();
    unitree::common::TimeTool::sleep_s(5); // Aguarda 5 segundos

    // Exemplo 2: Fazer o robô andar para frente
    std::cout << "Comando: Andar para frente por 5 segundos" << std::endl;
    // Parâmetros: (velocidade_x, velocidade_y, velocidade_rotacao)
    sport_client.Move(0.3, 0, 0); // Anda para frente a 0.3 m/s
    unitree::common::TimeTool::sleep_s(5); // Continua andando por 5 segundos

    // Exemplo 3: Parar o movimento
    std::cout << "Comando: Parar" << std::endl;
    sport_client.Move(0, 0, 0); // Envia comando de velocidade zero
    unitree::common::TimeTool::sleep_s(2);

    // Exemplo 4: Fazer o robô sentar
    std::cout << "Comando: Sentar" << std::endl;
    sport_client.StandDown();
    unitree::common::TimeTool::sleep_s(5);

    std::cout << "Sequência de movimentos concluída." << std::endl;

    return 0;
}
