// import React, {Component} from "react";
// const AddForm = ()=>(<h1>AddForm</h1>)
// export default AddForm
import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="placentaId">Placenta number</Label>
          <Input type="text" name="id" id="placentaId"/>
        </FormGroup>
        <FormGroup>
          <Label for="placentaNotes">Additional notes</Label>
          <Input type="textarea" name="notes" id="placentaNotes"/>
        </FormGroup>
        <FormGroup>
          <Label for="inflamStageSelect">Maternal inflammatory response - stage</Label>
          <Input type="select" name="inflamStage" id="inflamStageSelect">
            <option></option>
            <option>None</option>
            <option>Stage 1 - acute subchorionitis or chorionitis</option>
            <option>Stage 2 - acute chorioamnionitis - pmns extend into fibrous chorion or amnion</option>
            <option>Stage 3 - necrotizing chorioamnionitis: karyorrhexis of pmns, amniocyte necrosis, and/or amnion basement membrane hypereosinophilia</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="inflamGradeSelect">Maternal inflammatory response - grade</Label>
          <Input type="select" name="inflamGrade" id="inflamGradeSelect">
            <option></option>
            <option>None</option>
            <option>Grade 1 - non-severe</option>
            <option>Grade 2 - severe: confluent pmns or with subchorionic microabscesses</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="plateMulti">Chorionic plate</Label>
          <Input type="select" name="plate" id="plateMulti" multiple>
            <option>Normal</option>
            <option>Amnion with changes suggestive of meconium</option>
            <option>Meconium laden macrophages</option>
            <option>Squamitization / amnion nodosum</option>
            <option>Amnion absent</option>
            <option>Chorionic plate absent</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="fetalMulti">Fetal vessels</Label>
          <Input type="select" name="fetal" id="fetalMulti" multiple>
            <option>Normal</option>
            <option>Fetal inflammatory response (ungraded)</option>
            <option>Intramural fibrin deposition</option>
            <option>Nucleated red blood cells (erythroblastosis)</option>
            <option>Chorionic plate absent</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="plateNotes">Other chorionic plate findings</Label>
          <Input type="textarea" name="plateNotes" id="plateNotes"/>
        </FormGroup>
        <FormGroup>
          <Label for="place">multi-choice-grids</Label>
          <Input type="textarea" name="place" id="place" placeholder="Evidence of fetal vascular/maternal vascular malperfusion and Chronic inflammatory conditions"/>
        </FormGroup>
        <FormGroup>
          <Label for="VsizeSelect">Villous size</Label>
          <Input type="select" name="Vsize" id="VsizeSelect">
            <option></option>
            <option>Immature (large for gestational age)</option>
            <option>Appropriate for gestational age</option>
            <option>Accelerated maturation (Small for gestational age)</option>
            <option>Hypermature (Very small for gestational age)</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="VvesselsSelect">Villous vessels</Label>
          <Input type="select" name="Vvessels" id="VvesselsSelect">
            <option></option>
            <option>Internal (immature, separated by a nucleus from intervillous space)</option>
            <option>Intermediate</option>
            <option>External (mature, separated from intervillous space by thin less than 5um of cytoplasm)</option>
            <option>Hypermature (Very small for gestational age)</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="VlesionsMulti">Other villous lesions</Label>
          <Input type="select" name="Vlesions" id="VlesionsMulti" multiple>
            <option>Chorangiosis</option>
            <option>Dysplastic villi</option>
            <option>Chronic Intervillositis</option>
            <option>Tenny-Parker changes (>33% of villi in term pregnancy)</option>
            <option>Focal hydrops</option>
            <option>Diffuse hydrops</option>
            <option>Normal</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="VmacrophagesSelect">Villous hemosiderin-laden macrophages</Label>
          <Input type="select" name="Vmacrophages" id="VmacrophagesSelect">
            <option></option>
            <option>None</option>
            <option>Scant</option>
            <option>Moderate</option>
            <option>Prominent</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="VfindingsSelect">Other villous findings</Label>
          <Input type="textarea" name="Vfindings" id="VfindingsSelect"/>
        </FormGroup>
        <FormGroup>
          <Label for="Mvessels">Maternal vessels</Label>
          <Input type="select" name="Mvessels" id="MvesselsMulti" multiple>
            <option>Insufficient for diagnosis</option>
            <option>Appropriate</option>
            <option>Chronic vasculitis</option>
            <option>Mural hypertrophy of maternal arteries</option>
            <option>Acute atherosis</option>
            <option>Thrombosis</option>
            <option>Absence of spiral artery remodeling</option>
            <option>Persistance of intramural endovascular trophoblasts</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="DmacrophagesSelect">Decidual hemosiderin-laden macrophages</Label>
          <Input type="select" name="Dmacrophages" id="DmacrophagesSelect">
            <option></option>
            <option>None</option>
            <option>Scant</option>
            <option>Moderate</option>
            <option>Prominent</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="DfindingsSelect">Other decidual findings</Label>
          <Input type="textarea" name="Dfindings" id="DfindingsSelect"/>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

