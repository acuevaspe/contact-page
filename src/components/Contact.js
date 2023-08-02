import React from 'react';
import { Box, Button, Input, Text, Link } from '@chakra-ui/react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <Box className='contact-container'>
            <Box className='top-bar' bg='#000' h='36px' display='flex' justifyContent='center' alignItems='center' color='#fff'>
                Learn more about our latest features
            </Box>

            <h1 className='header-title' textAlign='center' color='#000' mt='13px'>
                B2B
            </h1>

            <Box className='header-container' mt='58px'>
                <Text fontSize='24px' fontWeight='bold'>
                    Contact Us
                </Text>
                <Text color='#000' mt='8px'>
                    Please provide some information to get started.
                </Text>
            </Box>

            <Box className='body-container' mt='58px' display='flex'>
                <form className='form-container'>
                    <Input type='email' placeholder='Email' />
                    <Input type='text' placeholder='Name' />
                    <Input type='text' placeholder='Phone Number' />
                    <select>
                        <option value='Sales'>Sales</option>
                        <option value='Press'>Press</option>
                        <option value='Support'>Support</option>
                        <option value='Demo'>Demo</option>
                    </select>
                    <Button className='submit' type='submit'>Submit</Button>
                </form>

                <Box className='right-column' flex='1' p='20px' color='#000' fontFamily='Inter' fontSize='16px' fontStyle='normal' fontWeight='400' lineHeight='normal'>
                    <Text>
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                        demonstrate the visual form of a document or a typeface without relying on meaningful
                        content. Lorem ipsum may be used as a placeholder before the final copy is available.
                    </Text>
                    <Text fontSize='16px' fontWeight='bold'>
                        Phone
                    </Text>
                    <Link href='tel:+18777777777' color='#0B92F1' fontSize='18px'>
                        +1 (877) 777-7777
                    </Link>
                    <Text fontSize='16px' fontWeight='bold'>
                        Hours:
                    </Text>
                    <Text>
                        Monday - Sunday: <strong>7am - 11pm EST</strong>
                    </Text>
                </Box>
            </Box>

            <Box className='footer' bg='#000' p='20px' color='#fff'>
                <Box className='footer-columns' display='flex'>
                    <Box className='footer-column' flex='1'>
                        <Text>✆ +1 (877) 777-7777</Text>
                        <Text>123 Main st, San Francisco, CA, 94107</Text>
                    </Box>
                    <Box className='footer-column' flex='1'>
                        <Text fontSize='16px' fontWeight='bold'>
                            Free Trial
                        </Text>
                        <Box className='footer-links'>
                            <Link href='#'>Azure</Link>
                            <Link href='#'>AWS</Link>
                            <Link href='#'>Google</Link>
                        </Box>
                    </Box>
                    <Box className='footer-column' flex='1'>
                        <Text fontSize='16px' fontWeight='bold'>
                            Resources
                        </Text>
                        <Box className='footer-links'>
                            <Link href='#'>Terms Of Service</Link>
                            <Link href='#'>Privacy Policy</Link>
                            <Link href='#'>Support</Link>
                        </Box>
                    </Box>
                    <Box className='footer-column' flex='1'>
                        <Box className='arrow-icon' cursor='pointer'  color='#fff'>
                            ^
                        </Box>
                    </Box>
                </Box>

                <Box className='footer-row'>
                    <Box className='white-divider' w='100%' h='1px' bg='#fff' mt='25px' />
                    <Text className='copyright' textAlign='center' fontFamily='Inter' fontSize='15px' fontWeight='400' lineHeight='normal' mt='25px'>
                        © 2022 Example
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

export default Contact;
