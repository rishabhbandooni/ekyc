import React from 'react'
import Icon1 from '../../images/icon-1.svg'
import Icon2 from '../../images/icon-2.svg'
import Icon3 from '../../images/icon-3.svg'
import Icon4 from '../../images/icon-4.svg'
import { ServicesContainer,ServicesH1,ServicesH2,ServicesWrapper,ServicesIcon, ServicesP,ServicesCard} from './ServicesElements'
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1 id="services">How It Works</ServicesH1>
            <ServicesWrapper>
                <ServicesCard><ServicesIcon src={Icon1}/>
                <ServicesH2>Step 1</ServicesH2>
            <ServicesP>Open Widget </ServicesP>
            </ServicesCard>
            <ServicesCard><ServicesIcon src={Icon2}/>
                <ServicesH2>Step 2</ServicesH2>
            <ServicesP>Choose one of the Documents to upload </ServicesP>
            </ServicesCard>
            <ServicesCard><ServicesIcon src={Icon3}/>
                <ServicesH2>Step 3</ServicesH2>
            <ServicesP>Upload The Document</ServicesP>
            </ServicesCard>
            <ServicesCard><ServicesIcon src={Icon4}/>
                <ServicesH2>Step 4</ServicesH2>
            <ServicesP>Uploaded Successfully Alert</ServicesP>
            </ServicesCard>
            </ServicesWrapper>

        </ServicesContainer>
    )
}

export default Services
