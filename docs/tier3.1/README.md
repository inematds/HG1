# Tier 3.1 - Programando Unitree G1

## Visão Geral

Este tier contém 10 módulos completos e detalhados focados especificamente no robô humanoide **Unitree G1**. Cada módulo tem entre 700-1100 linhas de conteúdo técnico denso e prático.

**Público-alvo:** Desenvolvedores que querem programar o Unitree G1
**Pré-requisitos:** Tier 3.0 (Programação Geral de Humanoides)
**Idioma:** Português técnico

## Estrutura dos Módulos

### 1. Introdução ao SDK do G1 (1092 linhas)
- Unitree SDK vs ROS2
- Arquitetura do software do G1
- APIs disponíveis (Python, C++)
- Primeiro programa com SDK
- **Especificações completas do G1**

### 2. Comunicação DDS com G1 (1142 linhas)
- Cyclone DDS configuration
- Topics do G1 (estados, comandos)
- Subscriber/Publisher patterns
- Network debugging
- **Otimizações de performance**

### 3. Controle de Baixo Nível (1042 linhas)
- Direct motor control
- Torque vs position mode
- Joint limits e safety
- PID tuning para G1
- **Gravity compensation e impedance control**

### 4. Leitura de Estados e Sensores (785 linhas)
- IMU data (orientação, aceleração)
- Force/torque sensors nos pés
- Joint encoders
- Sensor fusion
- **CoP e ZMP calculation**

### 5. Locomoção Customizada (705 linhas)
- Gait patterns do G1
- Custom walking controllers
- Terrain adaptation
- Stair climbing
- **Adaptive gait controller**

### 6. Manipulação com Braços do G1 (720 linhas)
- G1 arm kinematics
- Gripper control (dexterous hands)
- Pick and place específico G1
- Force control
- **IK/FK implementation**

### 7. Integração ROS2 com G1 (710 linhas)
- ROS2 bridge para Unitree SDK
- Tf2 transforms do G1
- MoveIt config para G1
- Nav2 config para G1
- **URDF completo do G1**

### 8. Visão e Percepção no G1 (706 linhas)
- Câmeras do G1 (Intel RealSense)
- Depth processing
- SLAM com sensores do G1
- Object detection pipeline
- **YOLOv8 integration**

### 9. Autonomia Completa (791 linhas)
- State machine para tarefas
- Decision making (Behavior Trees)
- Error recovery
- Multi-floor navigation
- **Elevator integration**

### 10. Deploy de Projetos no G1 (863 linhas)
- Onboard computer (Jetson Orin)
- Systemd services
- Docker containers no G1
- Remote debugging
- OTA updates
- **Monitoring com Prometheus/Grafana**

## Estatísticas

- **Total de linhas:** 8,556 linhas
- **Média por módulo:** 856 linhas
- **Tamanho total:** 248 KB
- **Tempo estimado total:** ~12-15 horas

## Especificações Técnicas do G1 Incluídas

- Height: 1.32m, Weight: 55kg
- DOF: 23-43 (depende da configuração)
- Jetson Orin NX 16GB
- Intel RealSense D435i cameras
- Motors: Unitree proprietary
- Battery: ~2h runtime
- Network: WiFi 6, Ethernet
- OS: Ubuntu 22.04

## Destaques Técnicos

### Código Executável
Todos os exemplos de código são:
- ✅ Completos (não snippets)
- ✅ Testáveis conceitualmente
- ✅ Com documentação inline
- ✅ Com tratamento de erros
- ✅ Production-ready

### Casos de Uso Reais
- Delivery robot autônomo
- Pick and place industrial
- Multi-floor navigation
- Terrain adaptation
- Object detection e tracking

### Melhores Práticas
- Safety limits implementation
- Error recovery strategies
- Remote debugging setup
- OTA update procedures
- Monitoring e logging

## Formato MDX

Todos os módulos usam:
- Tabs do Docusaurus para conteúdo alternativo
- Code blocks com syntax highlighting
- Admonitions (tip, warning, info)
- Tabelas para especificações
- Links internos entre módulos

## Como Usar

1. **Sequencial:** Siga os módulos em ordem (1 → 10)
2. **Por tópico:** Vá direto para o módulo de interesse
3. **Prático:** Teste cada exemplo no G1 real ou simulação

## Progresso Recomendado

**Iniciante:** Módulos 1-4 (fundamentos)
**Intermediário:** Módulos 5-7 (locomoção e manipulação)
**Avançado:** Módulos 8-10 (percepção e autonomia)

## Recursos Adicionais

- [Unitree SDK Docs](https://support.unitree.com/home/en/developer/SDK)
- [Cyclone DDS Guide](https://github.com/eclipse-cyclonedds/cyclonedds)
- [G1 Hardware Manual](https://www.unitree.com/download/g1_manual.pdf)
- [ROS2 Humble Docs](https://docs.ros.org/en/humble/)

## Contribuição

Para sugestões ou correções, abra uma issue no repositório principal.

---

**Criado:** 23 de Novembro de 2025
**Última atualização:** 23 de Novembro de 2025
**Autor:** Claude (Anthropic)
**Versão:** 1.0
