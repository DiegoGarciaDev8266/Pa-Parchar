// ═══════════════════════════════════════════════
//  PA PARCHAR — Datos Base
// ═══════════════════════════════════════════════

export const PRODUCTOS_BASE = [
  { id:"hc", nombre:"Hamburguesa Clásica", emoji:"🍔", precio:14000, categoria:"Fastfood",       descripcion:"Pan, carne, queso, lechuga, tomate" },
  { id:"dc", nombre:"Doble Carne",         emoji:"🥩", precio:18000, categoria:"Fastfood",       descripcion:"Pan, doble carne, doble queso, tocineta" },
  { id:"cp", nombre:"Combo Parchar",       emoji:"🎉", precio:22000, categoria:"Fastfood",       descripcion:"Hamburguesa + papas + gaseosa" },
  { id:"pc", nombre:"Perro Caliente",      emoji:"🌭", precio:10000, categoria:"Fastfood",       descripcion:"Pan, salchicha, salsas" },
  { id:"vg", nombre:"Veggie Burger",       emoji:"🥗", precio:15000, categoria:"Fastfood",       descripcion:"Pan, carne veggie, queso crema, lechuga" },
  { id:"pf", nombre:"Papas Fritas",        emoji:"🍟", precio:7000,  categoria:"Acompañamiento", descripcion:"Papas fritas crujientes" },
  { id:"pg", nombre:"Papas Gajo",          emoji:"🥔", precio:8000,  categoria:"Acompañamiento", descripcion:"Papas gajo con sal y especias" },
  { id:"ao", nombre:"Aros de Cebolla",     emoji:"🧅", precio:6000,  categoria:"Acompañamiento", descripcion:"Aros de cebolla apanados" },
  { id:"gs", nombre:"Gaseosa",             emoji:"🥤", precio:4000,  categoria:"Bebidas",        descripcion:"Gaseosa fría 350ml" },
  { id:"jn", nombre:"Jugo Natural",        emoji:"🍹", precio:6000,  categoria:"Bebidas",        descripcion:"Jugo natural del día" },
  { id:"lm", nombre:"Limonada",            emoji:"🍋", precio:5000,  categoria:"Bebidas",        descripcion:"Limonada natural con hielo" },
  { id:"ag", nombre:"Agua",                emoji:"💧", precio:3000,  categoria:"Bebidas",        descripcion:"Agua en botella 500ml" },
];

export const INVENTARIO_BASE = [
  { ingrediente:"Carne de res",       cantidad:100, unidad:"unidades",  minimo:15, categoria:"Proteína" },
  { ingrediente:"Salchicha",          cantidad:50,  unidad:"unidades",  minimo:10, categoria:"Proteína" },
  { ingrediente:"Carne veggie",       cantidad:30,  unidad:"unidades",  minimo:5,  categoria:"Proteína" },
  { ingrediente:"Tocineta",           cantidad:40,  unidad:"unidades",  minimo:8,  categoria:"Proteína" },
  { ingrediente:"Queso tajado",       cantidad:150, unidad:"tajadas",   minimo:20, categoria:"Lácteo" },
  { ingrediente:"Queso crema",        cantidad:500, unidad:"gramos",    minimo:100,categoria:"Lácteo" },
  { ingrediente:"Pan hamburguesa",    cantidad:80,  unidad:"unidades",  minimo:15, categoria:"Pan" },
  { ingrediente:"Pan perro caliente", cantidad:50,  unidad:"unidades",  minimo:10, categoria:"Pan" },
  { ingrediente:"Lechuga",            cantidad:5,   unidad:"unidades",  minimo:2,  categoria:"Fresco" },
  { ingrediente:"Tomate",             cantidad:10,  unidad:"unidades",  minimo:3,  categoria:"Fresco" },
  { ingrediente:"Cebolla",            cantidad:8,   unidad:"unidades",  minimo:2,  categoria:"Fresco" },
  { ingrediente:"Salsa de tomate",    cantidad:2000,unidad:"gramos",    minimo:300,categoria:"Salsa" },
  { ingrediente:"Mostaza",            cantidad:1000,unidad:"gramos",    minimo:200,categoria:"Salsa" },
  { ingrediente:"Mayonesa",           cantidad:1500,unidad:"gramos",    minimo:300,categoria:"Salsa" },
  { ingrediente:"Papas",              cantidad:80,  unidad:"porciones", minimo:15, categoria:"Acompañamiento" },
  { ingrediente:"Aros de cebolla",    cantidad:40,  unidad:"porciones", minimo:8,  categoria:"Acompañamiento" },
  { ingrediente:"Gaseosa",            cantidad:48,  unidad:"unidades",  minimo:12, categoria:"Bebida" },
  { ingrediente:"Jugo natural",       cantidad:20,  unidad:"unidades",  minimo:5,  categoria:"Bebida" },
  { ingrediente:"Limonada",           cantidad:15,  unidad:"unidades",  minimo:5,  categoria:"Bebida" },
  { ingrediente:"Agua",               cantidad:24,  unidad:"unidades",  minimo:6,  categoria:"Bebida" },
];

export const RECETAS = {
  "Hamburguesa Clásica": [
    { ingrediente:"Pan hamburguesa", cantidad:1   },
    { ingrediente:"Carne de res",    cantidad:1   },
    { ingrediente:"Queso tajado",    cantidad:1   },
    { ingrediente:"Lechuga",         cantidad:0.1 },
    { ingrediente:"Tomate",          cantidad:0.1 },
  ],
  "Doble Carne": [
    { ingrediente:"Pan hamburguesa", cantidad:1 },
    { ingrediente:"Carne de res",    cantidad:2 },
    { ingrediente:"Queso tajado",    cantidad:2 },
    { ingrediente:"Tocineta",        cantidad:1 },
  ],
  "Combo Parchar": [
    { ingrediente:"Pan hamburguesa", cantidad:1 },
    { ingrediente:"Carne de res",    cantidad:1 },
    { ingrediente:"Queso tajado",    cantidad:1 },
    { ingrediente:"Papas",           cantidad:1 },
    { ingrediente:"Gaseosa",         cantidad:1 },
  ],
  "Perro Caliente": [
    { ingrediente:"Pan perro caliente", cantidad:1  },
    { ingrediente:"Salchicha",          cantidad:1  },
    { ingrediente:"Salsa de tomate",    cantidad:30 },
    { ingrediente:"Mostaza",            cantidad:20 },
    { ingrediente:"Mayonesa",           cantidad:20 },
  ],
  "Veggie Burger": [
    { ingrediente:"Pan hamburguesa", cantidad:1   },
    { ingrediente:"Carne veggie",    cantidad:1   },
    { ingrediente:"Queso crema",     cantidad:50  },
    { ingrediente:"Lechuga",         cantidad:0.1 },
    { ingrediente:"Tomate",          cantidad:0.1 },
  ],
  "Papas Fritas":    [{ ingrediente:"Papas",           cantidad:1 }],
  "Papas Gajo":      [{ ingrediente:"Papas",           cantidad:1 }],
  "Aros de Cebolla": [{ ingrediente:"Aros de cebolla", cantidad:1 }],
  "Gaseosa":         [{ ingrediente:"Gaseosa",         cantidad:1 }],
  "Jugo Natural":    [{ ingrediente:"Jugo natural",    cantidad:1 }],
  "Limonada":        [{ ingrediente:"Limonada",        cantidad:1 }],
  "Agua":            [{ ingrediente:"Agua",            cantidad:1 }],
};

export const CATS_FIN = {
  Ingreso: ["Ventas Hamburguesas","Ventas Combos","Ventas Bebidas","Domicilios","Eventos","Otros ingresos"],
  Gasto:   ["Materia Prima","Nómina","Arriendo","Servicios Públicos","Empaques","Marketing","Mantenimiento","Otros gastos"],
};

export const MESES = ["Enero","Febrero","Marzo","Abril","Mayo","Junio",
                      "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

export const DIAS  = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];

export const TURNOS = ["Mañana","Tarde","Noche","Madrugada"];
