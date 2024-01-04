export function formatarCPF(cpf : string) : string {
  cpf = cpf.replace(/\D/g, '');
  cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  return cpf;
}
export function formatarData(data : string): string {
  const dataObj = new Date(data);

  if (isNaN(dataObj.getTime())) {
    return 'Data inválida';
  }

  const dia = String(dataObj.getDate()).padStart(2, '0');
  const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
  const ano = dataObj.getFullYear();

  return `${dia}/${mes}/${ano}`;
}
