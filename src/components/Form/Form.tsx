import {
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  Flex,
  FormControl,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { config } from "../../config/config";

interface Form {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
}

export const FormComponent = () => {
  const { button, main } = config;

  const [formData, setFormData] = useState<Form>();

  const [loading, setLoading] = useState(false);

  const [submitedForm, setSubmitedForm] = useState(false);

  const submit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitedForm(true);
    }, 1500);
  };

  return (
    <Flex flexDirection="column" alignItems="center" m="30px 0">
      <FormControl>
        <Input
          id="name"
          m="7px 0"
          placeholder="YOUR NAME"
          bg={main.text}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: e.target.value,
            });
          }}
        ></Input>
        <Input
          id="email"
          m="7px 0"
          placeholder="YOUR EMAIL ADDRESS"
          bg={main.text}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: e.target.value,
            });
          }}
        ></Input>
        <Flex m="7px 0" justifyContent="space-between">
          <Input
            id="company"
            width="240px"
            placeholder="COMPANY"
            bg={main.text}
            mr="10px"
            onChange={(e) => {
              setFormData({
                ...formData,
                company: e.target.value,
              });
            }}
          ></Input>
          <Input
            id="phone"
            w="200px"
            placeholder="PHONE"
            bg={main.text}
            onChange={(e) => {
              setFormData({
                ...formData,
                phone: e.target.value,
              });
            }}
          ></Input>
        </Flex>
        <Flex>
          <Input
            id="message"
            m="7px 0"
            h="100px"
            placeholder="YOUR MESSAGE"
            alignItems="flex-start"
            bg={main.text}
            onChange={(e) => {
              setFormData({
                ...formData,
                message: e.target.value,
              });
            }}
          ></Input>
        </Flex>
        <Flex m="7px 0" justifyContent="flex-end">
          <Button
            onClick={submit}
            type="submit"
            w="150px"
            bg={button.bg}
            color={button.text}
          >
            {!loading ? (
              <Text casing="uppercase" fontWeight="normal">
                Send Message
              </Text>
            ) : (
              <Spinner />
            )}
          </Button>
        </Flex>
      </FormControl>
      {submitedForm && (
        <AlertDialog
          closeOnEsc
          isCentered
          autoFocus
          closeOnOverlayClick
          onClose={() => {
            setSubmitedForm(false);
            setFormData({});
            console.log(1);
          }}
          leastDestructiveRef={undefined}
          isOpen={submitedForm}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <Alert status="success">
                <AlertIcon />
                <Box flex="1">
                  <AlertTitle>Formulario enviado!</AlertTitle>
                  <AlertDescription display="block">
                    Sr/a. {formData?.name} estaremos revisando sus datos y
                    llamando a la brevedad posible!
                  </AlertDescription>
                </Box>
                <CloseButton position="absolute" right="8px" top="8px" />
              </Alert>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      )}
    </Flex>
  );
};
