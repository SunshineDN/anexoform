import { useContext } from 'react';
import { ObjContext } from '../context/ObjContext';
import { PdfRef } from '../context/PdfContext';
import { useReactToPrint } from 'react-to-print';
import { InvisibleContext } from '../context/InvisibleContext';

const Form = () => {
  const { status, setStatus,
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
    <form action=''>
      <h1>Formulário</h1>
      <div>
        <p>Status</p>
        <ul>
          {status.map((item, index) => {
            return (
              <li key={index}>
                <input type='text' value={item} onChange={(e) => handleChange(e, index, status, setStatus)} />
                <button onClick={(e) => removeInput(e, index, status, setStatus)}>Remover</button>
              </li>
            );
          })}
        </ul>
        <button onClick={(e) => {
          addInput(e, status, setStatus);
        }}>Adicionar</button>
      </div>

      <div>
        <p>Solução</p>
        <ul>
          {solutions.map((item, index) => {
            return (
              <li key={index}>
                <input type='text' value={item} onChange={(e) => handleChange(e, index, solutions, setSolutions)} />
                <button onClick={(e) => removeInput(e, index, solutions, setSolutions)}>Remover</button>
              </li>
            );
          })}
        </ul>
        <button onClick={(e) => {
          addInput(e, solutions, setSolutions);
        }}>Adicionar</button>
      </div>

      <div>
        <p>Parâmetros Testados</p>
        <ul>
          {params.map((item, index) => {
            return (
              <li key={index}>
                <input type='text' value={item} onChange={(e) => handleChange(e, index, params, setParams)} />
                <button onClick={(e) => removeInput(e, index, params, setParams)}>Remover</button>
              </li>
            );
          })}
        </ul>
        <button onClick={(e) => {
          addInput(e, params, setParams);
        }}>Adicionar</button>
      </div>

      <div>
        <p>Materiais</p>
        <ul>
          {materials.map((item, index) => {
            return (
              <li key={index}>
                <input type='text' value={item.name} onChange={(e) => handleChangeObj(e, index, materials, setMaterials)} />
                <input type='number' value={item.quantity} onChange={(e) => handleChangeObj(e, index, materials, setMaterials, true)} />
                <button onClick={(e) => removeInput(e, index, materials, setMaterials)}>Remover</button>
              </li>
            );
          })}
        </ul>
        <button onClick={(e) => {
          addInput(e, materials, setMaterials, true);
        }}>Adicionar</button>
      </div>

      <div>
        <p>Equipamentos</p>
        <ul>
          {equipaments.map((item, index) => {
            return (
              <li key={index}>
                <input type='text' value={item.name} onChange={(e) => handleChangeObj(e, index, equipaments, setEquipaments)} />
                <input type='number' value={item.quantity} onChange={(e) => handleChangeObj(e, index, equipaments, setEquipaments, true)} />
                <button onClick={(e) => removeInput(e, index, equipaments, setEquipaments)}>Remover</button>
              </li>
            );
          })}
        </ul>
        <button onClick={(e) => {
          addInput(e, equipaments, setEquipaments, true);
        }}>Adicionar</button>
      </div>

      <div>
        <p>Serviços</p>
        <ul>
          {services.map((item, index) => {
            return (
              <li key={index}>
                <input type='text' value={item} onChange={(e) => handleChange(e, index, services, setServices)} />
                <button onClick={(e) => removeInput(e, index, services, setServices)}>Remover</button>
              </li>
            );
          })}
        </ul>
        <button onClick={(e) => {
          addInput(e, services, setServices);
        }}>Adicionar</button>
      </div>

      <div>
        <p>Custos</p>
        <ul>
          {costs.map((item, index) => {
            return (
              <li key={index}>
                <input type='text' value={item} onChange={(e) => handleChange(e, index, costs, setCosts)} />
                <button onClick={(e) => removeInput(e, index, costs, setCosts)}>Remover</button>
              </li>
            );
          })}
        </ul>
        <button onClick={(e) => {
          addInput(e, costs, setCosts);
        }}>Adicionar</button>
      </div>

      <div>
        <p>Imagens</p>
        <ul>
          {images.map((item, index) => {
            return (
              <li key={index}>
                <label>
                  <span>{item.name || 'Escolha uma imagem'}</span>
                  <input type='file' accept='image/*' onChange={(e) => handleChangeImage(e, index, images, setImages)} />
                </label>
                <button onClick={(e) => removeInput(e, index, images, setImages)}>Remover</button>
              </li>
            );
          })}
        </ul>
        {images.length < 2 && <button onClick={(e) => {
          addInput(e, images, setImages, true, true);
        }}>Adicionar</button>}
      </div>

      <button onClick={handlePrint}>Imprimir</button>
      <button onClick={hanleRemoveAll}>Remover Todos</button>
    </form>
  );
};

export default Form;
