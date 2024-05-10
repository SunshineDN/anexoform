import { useContext } from 'react';
import { ObjContext } from '../context/ObjContext';
import { PdfRef } from '../context/PdfContext';
import { useReactToPrint } from 'react-to-print';
import { InvisibleContext } from '../context/InvisibleContext';

import styled from 'styled-components';
import { IoRemoveCircle } from 'react-icons/io5';

const Container = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 10px;
  gap: 50px 0;
  // Deixar apenas 2 colunas;

  & > * {
    font-family: 'Inter', sans-serif !important;
  }
`;

const InputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 50px 0;
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
  width: calc(50% - 50px);
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Input = styled.input`
  box-shadow: inset #abacaf 0 0 0 2px;
  border: 0;
  background: rgba(0, 0, 0, 0);
  appearance: none;
  width: 100%;
  position: relative;
  border-radius: 3px;
  padding: 9px 12px;
  line-height: 1.4;
  color: rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 400;
  height: 40px;
  transition: all .2s ease;
  flex: ${props => props.$flex || '1'};

  &:hover{
      box-shadow: 0 0 0 0 #fff inset, #c8102e 0 0 0 2px;
  }
  &:focus{
      background: #fff;
      outline: 0;
      box-shadow: 0 0 0 0 #fff inset, #c8102e 0 0 0 3px;
  }

  &[type='file'] {
    display: none;
  }
`;

const TextArea = styled.textarea`
  box-shadow: inset #abacaf 0 0 0 2px;
  border: 0;
  background: rgba(0, 0, 0, 0);
  appearance: none;
  width: 100%;
  position: relative;
  border-radius: 3px;
  padding: 9px 12px;
  line-height: 1.4;
  color: rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 400;
  height: 150px;
  transition: all .2s ease;
  min-height: 100px;
  resize: none;

  &:hover{
      box-shadow: 0 0 0 0 #fff inset, #c8102e 0 0 0 2px;
  }
  &:focus{
      background: #fff;
      outline: 0;
      box-shadow: 0 0 0 0 #fff inset, #c8102e 0 0 0 3px;
  }
`;

const Button = styled.button`
  padding: 15px 20px;
  background-color: #f3f3f3;
  color: #c8102e;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  letter-spacing: 3px;
  overflow: hidden;
  transition: 0.5s;
  cursor: pointer;

  &:hover{
    background: #c8102e;
    color: #f3f3f3;
    box-shadow: 0 0 2px #c8102e,
                0 0 20px #c8102e;
  }
`;

const RemoveIcon = styled(IoRemoveCircle)`
  color: #c8102e;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    transform: scale(1.2);
  }
`;

const LastButton = styled.button`
  --_c: #88C100;
  flex: calc(1.25 + var(--_s,0));
  min-width: 0;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: bold;
  height: var(--h);
  cursor: pointer;
  color: var(--_c);
  border: var(--b) solid var(--_c);
  background: 
    conic-gradient(at calc(100% - 1.3*var(--b)) 0,var(--_c) 209deg, #0000 211deg) 
    border-box;
  clip-path: polygon(0 0,100% 0,calc(100% - 0.577*var(--h)) 100%,0 100%);
  padding: 0 calc(0.288*var(--h)) 0 0;
  margin: 0 calc(-0.288*var(--h)) 0 0;
  box-sizing: border-box;
  transition: flex .4s, color .2s, box-shadow .2s;

  &:focus-visible {
    outline-offset: calc(-2*var(--b));
    outline: calc(var(--b)/2) solid #000;
    background: none;
    clip-path: none;
    margin: 0;
    padding: 0;
  }

  &:hover, &:active:not(:focus-visible) {
    --_s: .75;
  }

  &:active{
    box-shadow: inset 0 0 0 100vmax var(--_c);
    color: #fff;
  }
`;

const LastButtons = styled.div`
  display: flex;
  align-items: center;
  width: 380px;
  gap: 10px;
  --b: 5px;   /* the border thickness */
  --h: 1.8em; /* the height */

  & ${LastButton} + ${LastButton} {
    --_c: #c8102e;
    flex: calc(1.3 + var(--_s,0));
    background: 
      conic-gradient(from -90deg at calc(1.3*var(--b)) 100%,var(--_c) 119deg, #0000 121deg) 
      border-box;
    clip-path: polygon(calc(0.577*var(--h)) 0,100% 0,100% 100%,0 100%);
    margin: 0 0 0 calc(-0.288*var(--h));
    padding: 0 0 0 calc(0.288*var(--h));
  }

  & ${LastButton}:focus-visible + ${LastButton} {
    background: none;
    clip-path: none;
    margin: 0;
    padding: 0;
  }

  & ${LastButton}:has(+ ${LastButton}:focus-visible) {
    background: none;
    clip-path: none;
    margin: 0;
    padding: 0
  }
`;

const List = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
`;

const ListItem = styled.li`
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  list-style: none;
  align-items: center;
`;

const H3 = styled.h3`
  font-size: 1.2rem;
`;

const Label = styled.label`
  padding: 10px;
  background-color: #fff;
  border: 2px solid #abacaf;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all .3s;
  font-size: .675rem;

  &:hover {

    background-color: #f3f3f3;
    border-color: #c8102e;
  }
`;

const Form = () => {
  const { objective, setObjective, status, setStatus,
    solutions, setSolutions,
    params, setParams,
    materials, setMaterials,
    equipaments, setEquipaments,
    services, setServices,
    costs, setCosts,
    images, setImages } = useContext(ObjContext);
  const { pdfRef } = useContext(PdfRef);
  const { setIsInvisible } = useContext(InvisibleContext);
  const handlePrint = (e) => {
    e.preventDefault();
    console.log('Printing...');
    console.log(pdfRef.current === null ? '*REF CAPTURADO*' : '*REF NÃO CAPTURADO*');
    //Executar a função de impressão após 5 segundos
    setIsInvisible(true);
    setTimeout(() => {
      print();
      setIsInvisible(false);
    }, 500);
  };
  const print = useReactToPrint({
    content: () => pdfRef.current
  });
  const hanleRemoveAll = (e) => {
    e.preventDefault();
    setObjective('');
    setStatus([]);
    setSolutions([]);
    setParams([]);
    setMaterials([]);
    setEquipaments([]);
    setServices([]);
    setCosts([]);
    setImages([]);
  };

  const addInput = (e, list, setList, isObj = false, isImg = false) => {
    e.preventDefault();
    const newList = [...list];
    if (isObj) {
      console.log('isObj');
      if (isImg) {
        console.log('isImg');
        newList.push({
          name: '',
          path: '',
        });
      } else {
        newList.push({
          name: '',
          quantity: '',
        });
      }
    } else {
      newList.push('');
    }
    setList(newList);
  };
  const removeInput = (e, index, list, setList) => {
    e.preventDefault();
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList.filter(item => item !== undefined));
  };
  const handleChange = (e, index, arr, setArr) => {
    const { value } = e.target;
    const newArr = [...arr];
    newArr[index] = value;
    setArr(newArr);
  };
  const handleChangeObj = (e, index, arr, setArr, isQuantity) => {
    const { value } = e.target;
    const newObjArr = [...arr];
    if (isQuantity) {
      newObjArr[index].quantity = value;
    } else {
      newObjArr[index].name = value;
    }
    setArr(newObjArr);
  };
  const handleChangeImage = (e, index, arr, setArr) => {
    const { files } = e.target;
    const newArr = [...arr];
    const file = files[0];
    newArr[index].name = file.name;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        newArr[index].path = e.target.result;
        setArr(newArr);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container action=''>
      <h1>Formulário</h1>

      <InputsContainer>
        <InputsWrapper>
          <H3>Objetivo</H3>
          <TextArea value={objective} placeholder='Descrição do objetivo' onChange={(e) => setObjective(e.target.value)} />
        </InputsWrapper>

        <InputsWrapper>
          <H3>Situação Atual</H3>
          <List>
            {status.map((item, index) => {
              return (
                <ListItem key={index}>
                  <Input type='text' value={item} onChange={(e) => handleChange(e, index, status, setStatus)} />
                  <RemoveIcon onClick={(e) => removeInput(e, index, status, setStatus)} />
                </ListItem>
              );
            })}
          </List>
          <Button type='button' onClick={(e) => {
            addInput(e, status, setStatus);
          }}>Adicionar</Button>
        </InputsWrapper>

        <InputsWrapper>
          <H3>Solução</H3>
          <List>
            {solutions.map((item, index) => {
              return (
                <ListItem key={index}>
                  <Input type='text' value={item} onChange={(e) => handleChange(e, index, solutions, setSolutions)} />
                  <RemoveIcon onClick={(e) => removeInput(e, index, solutions, setSolutions)} />
                </ListItem>
              );
            })}
          </List>
          <Button type='button' onClick={(e) => {
            addInput(e, solutions, setSolutions);
          }}>Adicionar</Button>
        </InputsWrapper>

        <InputsWrapper>
          <H3>Parâmetros Testados</H3>
          <List>
            {params.map((item, index) => {
              return (
                <ListItem key={index}>
                  <Input type='text' value={item} onChange={(e) => handleChange(e, index, params, setParams)} />
                  <RemoveIcon onClick={(e) => removeInput(e, index, params, setParams)} />
                </ListItem>
              );
            })}
          </List>
          <Button type='button' onClick={(e) => {
            addInput(e, params, setParams);
          }}>Adicionar</Button>
        </InputsWrapper>

        <InputsWrapper>
          <H3>Materiais</H3>
          <List>
            {materials.map((item, index) => {
              return (
                <ListItem key={index}>
                  <Input placeholder='Material' $flex='7' type='text' value={item.name} onChange={(e) => handleChangeObj(e, index, materials, setMaterials)} />
                  <Input placeholder='Qt.' type='text' value={item.quantity} onChange={(e) => handleChangeObj(e, index, materials, setMaterials, true)} />
                  <RemoveIcon onClick={(e) => removeInput(e, index, materials, setMaterials)} />
                </ListItem>
              );
            })}
          </List>
          <Button type='button' onClick={(e) => {
            addInput(e, materials, setMaterials, true);
          }}>Adicionar</Button>
        </InputsWrapper>

        <InputsWrapper>
          <H3>Equipamentos</H3>
          <List>
            {equipaments.map((item, index) => {
              return (
                <ListItem key={index}>
                  <Input placeholder='Equipamento' $flex='7' type='text' value={item.name} onChange={(e) => handleChangeObj(e, index, equipaments, setEquipaments)} />
                  <Input placeholder='Qt.' type='text' value={item.quantity} onChange={(e) => handleChangeObj(e, index, equipaments, setEquipaments, true)} />
                  <RemoveIcon onClick={(e) => removeInput(e, index, equipaments, setEquipaments)} />
                </ListItem>
              );
            })}
          </List>
          <Button type='button' onClick={(e) => {
            addInput(e, equipaments, setEquipaments, true);
          }}>Adicionar</Button>
        </InputsWrapper>

        <InputsWrapper>
          <H3>Serviços</H3>
          <List>
            {services.map((item, index) => {
              return (
                <ListItem key={index}>
                  <Input type='text' value={item} onChange={(e) => handleChange(e, index, services, setServices)} />
                  <RemoveIcon onClick={(e) => removeInput(e, index, services, setServices)} />
                </ListItem>
              );
            })}
          </List>
          <Button type='button' onClick={(e) => {
            addInput(e, services, setServices);
          }}>Adicionar</Button>
        </InputsWrapper>

        <InputsWrapper>
          <H3>Custos</H3>
          <List>
            {costs.map((item, index) => {
              return (
                <ListItem key={index}>
                  <Input type='text' value={item} onChange={(e) => handleChange(e, index, costs, setCosts)} />
                  <RemoveIcon onClick={(e) => removeInput(e, index, costs, setCosts)} />
                </ListItem>
              );
            })}
          </List>
          <Button type='button' onClick={(e) => {
            addInput(e, costs, setCosts);
          }}>Adicionar</Button>
        </InputsWrapper>

        <InputsWrapper>
          <H3>Imagens</H3>
          <List>
            {images.map((item, index) => {
              return (
                <ListItem key={index}>
                  <Label>
                    <span>{item.name || 'Escolha uma imagem'}</span>
                    <Input type='file' accept='image/*' onChange={(e) => handleChangeImage(e, index, images, setImages)} />
                  </Label>
                  <RemoveIcon onClick={(e) => removeInput(e, index, images, setImages)} />
                </ListItem>
              );
            })}
          </List>
          {images.length < 2 && <Button type='button' onClick={(e) => {
            addInput(e, images, setImages, true, true);
          }}>Adicionar</Button>}
        </InputsWrapper>
      </InputsContainer>
      <LastButtons>
        <LastButton type='submit' onClick={handlePrint}>Imprimir</LastButton>
        <LastButton type='reset' onClick={hanleRemoveAll}>Limpar</LastButton>
      </LastButtons>
    </Container>
  );
};

export default Form;
