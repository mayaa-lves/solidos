
    function mostrarCampos() {
      const solido = document.getElementById('solido').value;
      const inputs = document.getElementById('inputs');
      inputs.innerHTML = '';

      switch (solido) {
        case 'cubo':
          inputs.innerHTML = `<label>Lado (cm):</label><input id="lado" type="number">`;
          break;
        case 'paralelepipedo':
          inputs.innerHTML = `
            <label>Comprimento (cm):</label><input id="comp" type="number">
            <label>Largura (cm):</label><input id="larg" type="number">
            <label>Altura (cm):</label><input id="alt" type="number">
          `;
          break;
        case 'esfera':
          inputs.innerHTML = `<label>Raio (cm):</label><input id="raio" type="number">`;
          break;
        case 'cilindro':
          inputs.innerHTML = `
            <label>Raio (cm):</label><input id="raio" type="number">
            <label>Altura (cm):</label><input id="alt" type="number">
          `;
          break;
      }
    }

    function calcular() {
      const solido = document.getElementById('solido').value;
      const resultado = document.getElementById('resultado');
      let area = 0, volume = 0, perimetro = '—';

      switch (solido) {
        case 'cubo':
          const lado = parseFloat(document.getElementById('lado').value);
          area = 6 * lado ** 2;
          volume = lado ** 3;
          perimetro = 12 * lado;
          break;
        case 'paralelepipedo':
          const c = parseFloat(document.getElementById('comp').value);
          const l = parseFloat(document.getElementById('larg').value);
          const h = parseFloat(document.getElementById('alt').value);
          area = 2 * (c * l + c * h + l * h);
          volume = c * l * h;
          perimetro = 4 * (c + l + h);
          break;
        case 'esfera':
          const r = parseFloat(document.getElementById('raio').value);
          area = 4 * Math.PI * r ** 2;
          volume = (4 / 3) * Math.PI * r ** 3;
          break;
        case 'cilindro':
          const rc = parseFloat(document.getElementById('raio').value);
          const hc = parseFloat(document.getElementById('alt').value);
          area = 2 * Math.PI * rc * (rc + hc);
          volume = Math.PI * rc ** 2 * hc;
          break;
      }

      resultado.innerHTML = `
        <h3>Resultado:</h3>
        <p><strong>Área:</strong> ${area.toFixed(2)} cm²</p>
        <p><strong>Volume:</strong> ${volume.toFixed(2)} cm³</p>
        <p><strong>Perímetro:</strong> ${perimetro !== '—' ? perimetro + ' cm' : '—'}</p>
      `;
    }
  
