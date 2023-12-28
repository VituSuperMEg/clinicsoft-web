import Swal from "sweetalert2";

export class Messages {
  async confirmationDeleteReturn(msg = "Deseja excluir este registro?") {
    let res = false;
    await Swal.fire({
      title: "Exclusão",
      text: msg,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Não",
      confirmButtonText: "Sim",
    }).then((result) => {
      if (result.value) {
        res = true;
      }
    });
    return res;
  }
}
