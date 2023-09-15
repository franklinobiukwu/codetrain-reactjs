import { Button, ButtonGroup, FormControl, IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";

const RequirementForm = (props) => {
  const [inputFields, setInputFields] = useState([{ id: 1, value: "", active: true }]);
  const myRefs = useRef([]);
  const [forceRerender, setForceRerender] = useState(false); // State variable for re-rendering
  const [nextId, setNextId] = useState(2); // Maintain the next available ID

  const handleCheck = (field) => {
    // Make the current active field inactive
    field.active = false;

    // Check if this field is the last active field
    const isLastActiveField = inputFields[inputFields.length - 1].id === field.id;

    if (isLastActiveField) {
      // Create a new input field with the next available ID
      const newInputField = { id: nextId, value: "", active: true };
      setNextId(nextId + 1);

      // Update the inputFields state with the new field
      setInputFields([...inputFields, newInputField]);

      // Focus on the new input field using setTimeout to ensure it happens after the state update
      setTimeout(() => {
        myRefs.current[inputFields.length].focus();
      });
    }
    setForceRerender(!forceRerender);
  };

  const handleEdit = (field) => {
    // Make the selected field active
    field.active = true;
    myRefs.current[field.id - 1].focus();
    const newInputFields = [...inputFields];
    const index = newInputFields.findIndex((prevFields) => prevFields.id === field.id);
    if (index !== -1) {
      newInputFields[index].active = true;
      setInputFields(newInputFields);
    }
    setForceRerender(!forceRerender);
  };

  const handleDelete = (field) => {
    // Remove the selected field from the inputFields state
    setInputFields((prevFields) => prevFields.filter((f) => f.id !== field.id));

    // Remove the reference from myRefs.current
    myRefs.current = myRefs.current.filter((ref) => ref !== myRefs.current[field.id - 1]);
    setForceRerender(!forceRerender);
  };

  const handleInputChange = (e, id) => {
    const newInputFields = [...inputFields];
    const index = newInputFields.findIndex((field) => field.id === id);
    if (index !== -1) {
      newInputFields[index].value = e.target.value;
      setInputFields(newInputFields);
    }
  };

  const renderInputFields = () => {
    return inputFields.map((field) => (
      <InputGroup key={`inputField-${field.id}`}>
        <Input
          placeholder={props.placeholder}
          value={field.value}
	type={props.type}
          onChange={(e) => handleInputChange(e, field.id)}
          ref={(inputRef) => (myRefs.current[field.id - 1] = inputRef)}
          isReadOnly={!field.active}
        />
        <InputRightElement>
          <ButtonGroup>
            {field.active ? (
              <>
                <IconButton
                  icon={<FaCheck />}
                  onClick={() => handleCheck(field)}
                />
                <IconButton
                  icon={<FaTrash />}
                  onClick={() => handleDelete(field)}
                />
              </>
            ) : (
              <IconButton
                icon={<FaEdit />}
                onClick={() => handleEdit(field)}
              />
            )}
          </ButtonGroup>
        </InputRightElement>
      </InputGroup>
    ));
  };

  return (
    <FormControl>
      {renderInputFields()}
    </FormControl>
  );
};

export default RequirementForm;

