import { MagnifyingGlass  } from "@phosphor-icons/react";

export function Search() {
  return (
    <div className="pl-5 flex items-center">
      <input
        type="text"
        placeholder="Buscar..."
        className="form-control"
        style={{
          width: 400,
          borderRadius: 'unset',
          borderTopLeftRadius : '6px',
          borderBottomLeftRadius : '6px'
        }}
      />
      <div className="bg-emerald-500 h-full w-12 flex items-center justify-center clicked" style={{
        borderTopRightRadius : '6px',
        borderBottomRightRadius : '6px'
      }}>
      <MagnifyingGlass color="#fff"/>
      </div>
    </div>
  );
}
