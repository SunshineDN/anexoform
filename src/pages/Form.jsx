import { useContext } from 'react';
import { ObjContext } from '../context/ObjContext';
import { PdfRef } from '../context/PdfContext';
import { useReactToPrint } from 'react-to-print';
import { InvisibleContext } from '../context/InvisibleContext';

import styled from 'styled-components';
import { IoRemoveCircle } from 'react-icons/io5';

const Container = styled.form`
  display: flex;
  flex-flow: row wrap;
  gap: .625rem; // 10px
  justify-content: center;
  // Deixar apenas 2 colunas

  & > * {
    font-family: 'Inter', sans-serif !important;
  }
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: .625rem; // 10px
  cursor: pointer;
  transition: color .3s, background-color .3s;

  
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

const RemoveIcon = styled(IoRemoveCircle)`
  color: #000;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    color: #f00;
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
    --_c: #FF003C;
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
    console.log(pdfRef.current);
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
      newObjArr[index].quantity = Number(value);
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
      <InputsWrapper>
        <p>Objetivo</p>
        <input type='text' value={objective} onChange={(e) => setObjective(e.target.value)} />
      </InputsWrapper>

      <InputsWrapper>
        <p>Status</p>
        <List>
          {status.map((item, index) => {
            return (
              <ListItem key={index}>
                <input type='text' value={item} onChange={(e) => handleChange(e, index, status, setStatus)} />
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
        <p>Solução</p>
        <List>
          {solutions.map((item, index) => {
            return (
              <ListItem key={index}>
                <input type='text' value={item} onChange={(e) => handleChange(e, index, solutions, setSolutions)} />
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
        <p>Parâmetros Testados</p>
        <List>
          {params.map((item, index) => {
            return (
              <ListItem key={index}>
                <input type='text' value={item} onChange={(e) => handleChange(e, index, params, setParams)} />
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
        <p>Materiais</p>
        <List>
          {materials.map((item, index) => {
            return (
              <ListItem key={index}>
                <input type='text' value={item.name} onChange={(e) => handleChangeObj(e, index, materials, setMaterials)} />
                <input type='number' value={item.quantity} onChange={(e) => handleChangeObj(e, index, materials, setMaterials, true)} />
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
        <p>Equipamentos</p>
        <List>
          {equipaments.map((item, index) => {
            return (
              <ListItem key={index}>
                <input type='text' value={item.name} onChange={(e) => handleChangeObj(e, index, equipaments, setEquipaments)} />
                <input type='number' value={item.quantity} onChange={(e) => handleChangeObj(e, index, equipaments, setEquipaments, true)} />
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
        <p>Serviços</p>
        <List>
          {services.map((item, index) => {
            return (
              <ListItem key={index}>
                <input type='text' value={item} onChange={(e) => handleChange(e, index, services, setServices)} />
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
        <p>Custos</p>
        <List>
          {costs.map((item, index) => {
            return (
              <ListItem key={index}>
                <input type='text' value={item} onChange={(e) => handleChange(e, index, costs, setCosts)} />
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
        <p>Imagens</p>
        <List>
          {images.map((item, index) => {
            return (
              <ListItem key={index}>
                <label>
                  <span>{item.name || 'Escolha uma imagem'}</span>
                  <input type='file' accept='image/*' onChange={(e) => handleChangeImage(e, index, images, setImages)} />
                </label>
                <RemoveIcon onClick={(e) => removeInput(e, index, images, setImages)} />
              </ListItem>
            );
          })}
        </List>
        {images.length < 2 && <Button type='button' onClick={(e) => {
          addInput(e, images, setImages, true, true);
        }}>Adicionar</Button>}
      </InputsWrapper>
      <LastButtons>
        <LastButton type='submit' onClick={handlePrint}>Imprimir</LastButton>
        <LastButton type='reset' onClick={hanleRemoveAll}>Remover Todos</LastButton>
      </LastButtons>
    </Container>
  );
};

export default Form;
