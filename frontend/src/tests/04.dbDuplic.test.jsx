import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Form } from "../components/Form/Form";


describe('VERIFICAÇÃO SE EXISTE CONTROLE DE DUPLICIDADE EM RELAÇÃO AO db', () => {

    it('Será validado se o componente Form será renderizado', () => {
        render(<Form />)
    })


})

    