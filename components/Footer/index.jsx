import { Box } from "@chakra-ui/react";

const Footer = () => (
  <Box
    textAlign="center"
    p="5"
    color="gray.600"
    borderTop="1px"
    borderColor="gray.100"
  >
    Copyright &copy;{new Date().getFullYear()} All rights reserved | DESIGNED BY
    JOE.
  </Box>
);

export default Footer;
