import React from "react";
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import {
    BooleanInput,
    Create,
    FileField,
    FileInput,
    FormDataConsumer,
    ReferenceInput,
    SelectArrayInput,
    SelectInput,
    SimpleForm,
    TextInput
} from 'react-admin';

import TestTypeCmp from '../components/tests/TestTypeCmp';
import {Card} from 'primereact/card';
import {Box, Typography} from "@material-ui/core";
import {TabPanel, TabView} from "primereact/tabview";


const StrategyCreate = (props: any) => {

    return (
        <Create {...props}>
            <SimpleForm>

                <div style={{width: '100%'}}>


                    <Card style={{width: '100%'}}>
                        <Typography variant="h6" gutterBottom>Estrategia de Pruebas <hr/></Typography>
                        <TextInput source="nom_estrategia" label="Nombre" fullWidth/>
                    </Card>

                    <br/>

                    <Card style={{width: '100%'}}>
                        <Typography variant="h6" gutterBottom>Aplicación <hr/></Typography>
                        <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
                            <Box p={1} width="33%">
                                <ReferenceInput label="Nombre" source="id_app" reference="apps"
                                                sort={{field: 'id_app', order: 'ASC'}}>
                                    <SelectInput optionText="nombre" fullWidth/>
                                </ReferenceInput>
                            </Box>
                            <Box p={1} width="33%">
                                <SelectInput fullWidth source="tipo_app" label="Tipo" choices={[
                                    {id: 'web', name: 'Web'},
                                    {id: 'movil', name: 'Móvil'},
                                ]}/>
                            </Box>
                            <Box p={1} width="33%">
                                <FormDataConsumer>
                                    {({formData, ...rest}) =>
                                        <ReferenceInput label="Versión"
                                                        source="id_app"
                                                        reference="versions" {...rest}
                                                        filter={{id_app: formData.id_app}}
                                                        sort={{field: 'id_app', order: 'ASC'}}>
                                            <SelectInput source="vesion" optionText="descripcion" fullWidth/>
                                        </ReferenceInput>
                                    }
                                </FormDataConsumer>
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
                            <Box p={1} width="33%">
                                <SelectInput fullWidth source="modo" choices={[
                                    {id: 'headful', name: 'HeadFul'},
                                    {id: 'headless', name: 'HeadLess'},

                                ]}/>
                            </Box>
                            <Box p={1} width="33%">
                                <BooleanInput label="VRT (Visual Regression Testing)" source="vrt" fullWidth/>
                            </Box>
                            <Box p={1} width="33%">
                                <FormDataConsumer>
                                    {({formData, ...rest}) => formData.vrt &&
                                        <ReferenceInput label="Versión Vrt"
                                                        source="id_app"
                                                        reference="versions" {...rest}
                                                        filter={{id_app: formData.id_app}}
                                        >
                                            <SelectInput source="vesionVrt" optionText="descripcion" fullWidth/>
                                        </ReferenceInput>
                                    }
                                </FormDataConsumer>
                            </Box>
                        </Box>

                    </Card>

                    <br/>

                    <Card style={{width: '100%'}}>
                        <Typography variant="h6" gutterBottom>Matriz de Navegadores <hr/></Typography>
                        <SelectArrayInput label="Versiones Firefox" source="firefox" fullWidth choices={[
                            {id: '67', name: '67'},
                            {id: '68', name: '68'},
                        ]}/>

                        <SelectArrayInput label="Versiones Google Chrome " source="chrome" fullWidth choices={[
                            {id: '80', name: '80'},
                            {id: '81', name: '81'},
                        ]}/>
                    </Card>

                    <br/>

                    <Card style={{width: '100%'}}>
                        <Typography variant="h6" gutterBottom>Matriz de Dispositivos <hr/></Typography>
                        <SelectArrayInput label="Dispositivos" source="dispositivos" fullWidth choices={[
                            {
                                id: '5e4c60b3-327b-4fb4-98e2-4f996900e145',
                                name: 'Custom Tablet  - Android: 4.4.4 - SCREEN: 1536 x 2048 dpi 320'

                            },
                            {
                                id: 'b1e51193-4db8-43f7-b7cd-ae35eebb6bca',
                                name: 'Custom Phone - Android: 4.4.4 - SCREEN: 1536 x 2048 dpi 320'
                            },

                            {
                                id: '42b60b69-bd60-4c3d-912c-4073d854573d',
                                name: 'Google Nexus 10 - Android:  4.4.4  - SCREEN: 2560 x 1600 dpi 320'
                            },

                            {
                                id: 'de20111c-332a-4cb4-8088-d4a7f8f961ec',
                                name: 'Samsung Galaxy Note 2 - Android: 4.4.4 - SCREEN: 720 x 1280 dpi 320'
                            },

                            {
                                id: '5f6d4c94-d926-42cc-8019-f902295fc36d',
                                name: 'Amazon Fire 7 - Android: 7.1.0 - SCREEN: 1024 x 600 dpi 160'
                            },

                            {
                                id: 'e20da1a3-313c-434a-9d43-7268b12fee08',
                                name: 'Samsung Galaxy S9 - Android: 9.0 - SCREEN: 1440 x 2960 dpi 560'
                            },

                            {
                                id: '95c48908-744b-4768-a6c0-4fca8e27d166',
                                name: 'Huawei P30 Pro - Android:  9.0  - SCREEN: 1080 x 2340 dpi 360'
                            },
                        ]}/>
                    </Card>

                    <br/>

                    <Card style={{width: '100%'}}>
                        <Typography variant="h6" gutterBottom>Tipos de Pruebas <hr/></Typography>
                        <SelectArrayInput label="Pruebas" source="pruebas" fullWidth choices={[
                            {id: 'e2e', name: 'E2E'},
                            {id: 'random', name: 'RANDOM'},
                            {id: 'bdt', name: 'BDT'},

                        ]}/>

                        <TabView style={{width: '100%'}} >
                            <TabPanel header="E2E">
                                <FileInput source="filesE2E" label="Script E2E">
                                    <FileField source="urlFile" title="nomfile"/>
                                </FileInput>
                            </TabPanel>
                            <TabPanel header="RANDOM">

                                <Card style={{width: '100%'}}>
                                    <Typography variant="h6" gutterBottom>Parámetros <hr/></Typography>
                                    <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
                                        <Box p={1} width="50%">
                                            <TextInput source="semillaRandom" label="Semilla" fullWidth/>
                                        </Box>
                                        <Box p={1} width="50%">
                                            <TextInput source="numEventos" label="Número de Eventos" fullWidth/>
                                        </Box>

                                    </Box>
                                </Card>


                            </TabPanel>
                            <TabPanel header="BDT">

                                <FileInput source="filesBDT" label="Script BDT">
                                    <FileField source="fileUrl" title="nomFile"/>
                                </FileInput>

                            </TabPanel>
                        </TabView>

{/*
                        <FormDataConsumer>
                            {({formData, ...rest}) => formData.prueba &&  <TestTypeCmp/>
                            }
                        </FormDataConsumer>*/}


                    </Card>


                </div>
            </SimpleForm>
        </Create>
    );
};


export default StrategyCreate;