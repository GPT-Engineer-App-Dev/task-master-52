import { useState } from "react";
import { Container, Text, VStack, Input, Button, HStack, List, ListItem, IconButton, Box, Heading } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Heading as="h1" size="2xl" mb={6}>
        Todo Application
      </Heading>
      <VStack spacing={4} width="100%" align="center">
        <Text fontSize="2xl">Your Tasks</Text>
        <HStack width="100%">
          <Input
            placeholder="Enter a task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <Button colorScheme="green" onClick={addTask}>
            Add Task
          </Button>
        </HStack>
        <List spacing={3} width="100%">
          {tasks.map((task, index) => (
            <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center" p={2} borderWidth="1px" borderRadius="md">
              <Text>{task}</Text>
              <IconButton
                aria-label="Delete task"
                icon={<FaTrash />}
                onClick={() => deleteTask(index)}
              />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;