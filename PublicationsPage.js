import React from 'react';
import NavBar from '../../components/NavBar/NavBar';

export default function PublicationsPage(props){
    return(
        <React.Fragment>
            <NavBar activePage="publications" />
            <div className="container">
                <h1 className="py-4">Publications</h1>
                <ul>
                    <li className="py-2">
                    de Andrade, J. B. C., Mohr, J. P., Lima, F. O., de Freitas Carvalho, J. J., de Farias, V. A. E., Oliveira-Filho, J., ... & Pires, M. M. (2020). Predicting hemorrhagic transformation in patients not submitted to reperfusion therapies. Journal of Stroke and Cerebrovascular Diseases, 29(8), 104940. <a href="https://www.sciencedirect.com/science/article/abs/pii/S1052305720303463">(link)</a>
                    </li>
                    <li className="py-2">
                    ANDRADE, J. B. C. D., MOHR, J. P., LIMA, F. O., BARROS, L. C. M., NEPOMUCENO, C. R., PORTELA, L. B., & SILVA, G. S. (2020). Predictors of hemorrhagic transformation after acute ischemic stroke based on the experts’ opinion. Arquivos de Neuro-Psiquiatria, (AHEAD). <a href="https://www.scielo.br/pdf/anp/2020nahead/1678-4227-anp-0004-282x20200008.pdf">(link)</a>
                    </li>
                    <li className="py-2">
                    Andrade, J. B. C., Mohr, J. P., Lima, F. O., de Carvalho, J. J. F., Barros, L. C. M., Nepomuceno, C. R., ... & Silva, G. S. (2020). The role of hemorrhagic transformation in acute ischemic stroke upon clinical complications and outcomes. Journal of Stroke and Cerebrovascular Diseases, 104898. <a href="https://www.sciencedirect.com/science/article/abs/pii/S1052305720302974">(link)</a>
                    </li>
                </ul>
            </div>
        </React.Fragment>
        
    );
}