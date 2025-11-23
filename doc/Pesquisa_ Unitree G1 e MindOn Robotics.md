# Pesquisa: Unitree G1 e MindOn Robotics

## Informações Coletadas

### Unitree G1 - Especificações Técnicas

#### Hardware
- **Altura em posição de pé**: 1.32m (1320×450×200 mm)
- **Peso com bateria**: ~55kg
- **Processamento**: 
  - CPU principal: 8-core high-performance processor
  - GPU: NVIDIA Jetson Orin NX 16GB, 100 TOPS
  - PC1: Dedicado ao controle de movimento (não aberto)
  - PC2: Disponível para desenvolvimento secundário (IP: 192.168.123.164)

#### Sensores
- **LiDAR**: LIVOX-MID360 (excelente percepção ambiental)
- **Câmeras**: Múltiplas câmeras para visão
- **IMU**: Inertial Measurement Unit
- **Microfones**: Para interação por voz
- **Sensores de força**: Para controle de força-posição híbrido

#### Arquitetura de Software

**Middleware de Comunicação**: 
- DDS (Data Distribution Service) - compatível com ROS2
- ROS2 interface disponível
- Comunicação entre módulos via DDS

**Módulos Principais**:
1. Controle de locomoção (walk engine)
2. Controle de membros (IK, FK, torque control)
3. Percepção (câmeras, depth, IMU, microfones)
4. Planejamento de movimento
5. Navegação (SLAM, VIO)
6. Firmware e drivers para atuadores e sensores

**Interfaces de Desenvolvimento**:
- DDS (C++ e Python)
- ROS2
- GST (transmissão de imagem)

#### Conectividade
- **Cloud**: MQTT para IoT, HTTP para App/Web, WebRTC para teleoperação
- **Bluetooth (BLE)**: Configuração de rede e verificação de segurança
- **WebRTC**: Pipeline de dados com App (áudio, vídeo, ponto de nuvem, status de movimento)

### MindOn Robotics

#### Capacidades Demonstradas
- Abrir cortinas
- Cuidado de plantas (regar)
- Transporte de pacotes
- Limpeza de lençol
- Organização de objetos
- Remoção de lixo
- Interação com crianças

#### Tecnologia
- **Abordagem**: Modelos de IA (Vision-Language-Action models)
- **Aprendizado**: Deep Reinforcement Learning + Imitation Learning
- **Autonomia**: Demonstrada como completamente autônoma (sem teleoperação)
- **Generalização**: Capacidade de generalizar entre ambientes

#### Arquitetura Presumida
- World Model: Compreensão de interações físicas entre robô e ambiente
- Pipeline: Percepção → Decisão → Ação
- Foundation Models: Provavelmente usando modelos de linguagem visual

### Repositórios GitHub Unitree

**Principais Projetos**:
1. `unitree_sdk2` - SDK C++ para Go2, B2, H1, G1
2. `unitree_sdk2_python` - Interface Python
3. `unitree_ros` / `unitree_ros2` - Pacotes ROS
4. `unitree_rl_gym` - Exemplos de RL com Isaac Sim
5. `unitree_mujoco` - Simulador MuJoCo com sim-to-real
6. `xr_teleoperate` - Teleoperação com Apple Vision Pro
7. `unitree_IL_lerobot` - Imitation Learning com LeRobot

### Lacunas de Informação

1. **Detalhes exatos da arquitetura MindOn**: Não há documentação pública disponível
2. **Modelos específicos de IA**: Não confirmado quais foundation models são usados
3. **Limitações de autonomia**: Áreas onde ainda há dependência de cenários controlados
4. **Modificações de firmware**: Se MindOn modificou firmware de motores/sensores
5. **Nível de acesso ao SDK**: Quais restrições o SDK original impõe

## Próximos Passos

1. Acessar documentação detalhada do SDK2
2. Estudar exemplos de código em Python e C++
3. Analisar repositórios de RL e imitation learning
4. Criar guia estruturado para três níveis de usuários
5. Desenvolver exemplos práticos de código
