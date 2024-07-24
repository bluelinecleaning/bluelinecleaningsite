// AWS Region
const REGION = "ap-southeast-2"

// import Template
const mjml2html = require('mjml')

const { SendEmailCommand } = require("@aws-sdk/client-ses")
const { SESClient } = require("@aws-sdk/client-ses")

// Create SES service object
const sesClient = new SESClient({ region: REGION })

// Image url
const imgUrl = "https://blueline-cleaning.s3.ap-southeast-2.amazonaws.com/logo1.png"

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    const parsedBody = JSON.parse(event.body)

    console.log('parsed', parsedBody)

    try {
        const resToBlueline = await sendMailToBlueline(parsedBody)
        console.log('sending mail to blueline', resToBlueline)

        const resToCustomer = await sendMailToCustomers(parsedBody)
        console.log('Sending email to customer', resToCustomer)

        if(resToBlueline && resToCustomer) {
            return {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "*"
                },
                body:JSON.stringify({ status: 200 })
            }
        } else {
            throw new Error('sending failed')
        }

    } catch (error) {
        console.error('error', error)
        
        return {
            statusCode: 400,
            body: 'Sending failed'
        }
    }
};


// Function that sends email to Ausadvent
const sendMailToBlueline = async(body) => {
    const mjmlTemplateToBlueline = `
        <mjml>
            <mj-head>
                <mj-title>New quote request</mj-title>
                <mj-font name="Quantico" href="https://fonts.googleapis.com/css2?family=Inter&display=swap" />
                <mj-attributes>
                    <mj-text font-family="Quantico, sans-serif" />
                <mj-class name="phone" />
                </mj-attributes>
            </mj-head>
            <mj-body>
                <mj-section>
                    <mj-column>
                        <mj-image src=${imgUrl} alt="Ausadvent logo" align="center" width="79px" padding="0"></mj-image>
                    </mj-column>
                </mj-section>
                <mj-section> 
                    <mj-divider border-color="#007FA3" border-width="1px"></mj-divider>
                </mj-section>
                <mj-section padding-top="32px" padding-left="16px" padding-right="16px" padding-bottom="16px" >
                    <mj-text font-size="16px">Hello Management team, <br/><br/><br/></mj-text>
                    <mj-text font-size="16px">The person ${body.values.firstname} ${body.values.lastname} wants to get a quote for a ${body.values.service} service and left the following service description:<br/><br/></mj-text>
                    <mj-text font-size="16px">"${body.values.description}"<br/><br/></mj-text>
                    <mj-text font-size="16px">His/her email address is ${body.values.email} and contact number ${body.values.phoneNumber}. <br/><br/></mj-text>
                
                    <mj-text font-size="16px" >Best regards,<br/><br/></mj-text>
                    <mj-text font-size="16px" >Blueline Cleaning.<br/><br/></mj-text>
                    
                    <mj-section padding-left="40px" padding-right="30px"> 
                        <mj-divider border-color="#007FA3" border-width="1px"></mj-divider>
                    </mj-section>
                    <mj-section padding="0">
                        <mj-wrapper padding="0" display="flex"  >
                            <mj-column mj-class="phone" vertical-align="middle">
                            <mj-text color="#2563EB" align="center"><a href="tel:+61428994431" style="text-decoration: none; "> M: +61 0428 994 431 </a> </mj-text>
                                <mj-text align="center">59-61 Creek Road, New Town, Tas 7008</mj-text>
                            </mj-column>
                        </mj-wrapper>
                    </mj-section>
                </mj-section>
            </mj-body>
        </mjml>
    `;

    // Convert MJML to HTML
    const { html } = mjml2html(mjmlTemplateToBlueline);

    const createSendEmailCommand = (toAddress, fromAddress) => {
        return new SendEmailCommand({
            Destination: {
                CcAddresses: [],
                ToAddresses: [
                    toAddress
                ]
            },
            Message: {
                Body: {
                    /* required */
                    Html: {
                      Charset: "UTF-8",
                      Data: html,
                    },
                    Text: {
                      Charset: "UTF-8",
                      Data: `The person ${body.values.firstName}`,
                    },
                },
                Subject: {
                    Charset: "UTF-8",
                    Data: "New quote request",
                },
            },
            Source: fromAddress
        })
    }

    const sendEmailCommand = createSendEmailCommand(
        // Change it for the CX email address
        "contact@bluelinecleaning.com.au",
        `contact@bluelinecleaning.com.au`,
    );

    try {
        const resultForBlueline = await sesClient.send(sendEmailCommand)
        console.log('Result mail to cx', resultForBlueline);

        return {
            statusCode: 200
        }
    } catch (error) {
        console.error('error', error)
    }
}

// Function that sends email to customers
const sendMailToCustomers = async(body) => {
    // Mail template for customers
    const mjmlTemplateToCustomers = `
        <mjml>
            <mj-head>
            <mj-title>Your quote request</mj-title>
            <mj-attributes>
                <mj-text font-family="Arial, sans-serif" />
                <mj-class name="phone" />
            </mj-attributes>
            </mj-head>
            <mj-body>
            <mj-section>
                <mj-column>
                <mj-image src="${imgUrl}" alt="Ausadvent logo" align="center" width="79px" padding="0"></mj-image>
                </mj-column>
            </mj-section>
            <mj-section>
                <mj-divider border-color="#007FA3" border-width="1px"></mj-divider>
            </mj-section>
            <mj-section padding-top="32px" padding-left="16px" padding-right="16px" padding-bottom="16px">
                <mj-text font-size="16px" line-height="1.5">
                Hi ${body.values.firstname} ${body.values.lastname},<br/><br/>
                Thank you for contacting us at Blueline Cleaning. We have received your message and appreciate your interest in our services.<br/><br/>
                Our team will review your inquiry and get back to you as soon as possible. If you have any urgent matters, please feel free to contact us directly at <a href="tel:+61468816441" style="text-decoration: none; color: #000000; font-weight: bold;">+61 0468 816 441</a>.<br/><br/>
                We look forward to the opportunity to serve you and provide exceptional support for your needs.<br/><br/><br/>
                Best regards,<br/><br/>
                Blueline Cleaning
                </mj-text>
            </mj-section>
            <mj-section padding-left="16px" padding-right="16px">
                <mj-divider border-color="#007FA3" border-width="1px"></mj-divider>
            </mj-section>
            <mj-section padding="0">
                <mj-column>
                <mj-text color="#2563EB" align="center"><a href="tel:+61468816441" style="text-decoration: none;">M: +61 0468 816 441</a></mj-text>
                <mj-text align="center">59-61 Creek Road, New Town, Tas 7008</mj-text>
                </mj-column>
            </mj-section>
            </mj-body>
        </mjml>
    `;

    // Convert MJML to HTML
    const { html } = mjml2html(mjmlTemplateToCustomers);

    const createSendEmailCommand = (toAddress, fromAddress) => {
        return new SendEmailCommand({
            Destination: {
                CcAddresses: [],
                ToAddresses: [
                    toAddress
                ]
            },
            Message: {
                Body: {
                    /* required */
                    Html: {
                      Charset: "UTF-8",
                      Data: html,
                    },
                    Text: {
                      Charset: "UTF-8",
                      Data: `The person ${body.values.firstName}`,
                    },
                },
                Subject: {
                    Charset: "UTF-8",
                    Data: "Your quote request",
                },
            },
            Source: fromAddress
        })
    }

    const sendEmailCommand = createSendEmailCommand(
        `${body.values.email}`,
        // Change it for the CX email address
        "contact@bluelinecleaning.com.au"
    );

    try {
        const resultForClients = await sesClient.send(sendEmailCommand)
        console.log('Result mail to cx', resultForClients);

        return {
            statusCode: 200
        }
    } catch (error) {
        console.error('error', error)
    }
}