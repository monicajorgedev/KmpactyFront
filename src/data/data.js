export const type = [
    {
        key: "campamento", value: "Campamento"
    },{
        key: "actniños", value: "Actividad Niños"
    },{
        key: "actadultos", value: "Actividad Adultos"
    },{
        key: "sincole", value: "Dias sin cole"
    }
]

export const category = [
    {
        key: "baile", value: "Baile"
    },{
        key: "deporte", value: "Deporte"
    },{
        key: "hipica", value: "Hípica"
    },{
        key: "ingles", value: "Inglés"
    },{
        key: "musica", value: "Música"
    },{
        key: "naturaleza", value: "Naturaleza"
    },{
        key: "salud", value: "Salud y Bienestar"
    },{
        key: "tecnologico", value: "Tecnológico"
    },{
        key: "otras", value: "Otras categorias"
    }
]

export const subcategory = [
    {
        key:"futbol", value: "Futbol"
    },{
        key:"baloncesto", value: "Baloncesto"
    },{
        key:"paddle", value: "Paddle"
    },{
        key:"tenis", value: "Tenis"
    },{
        key:"ritmica", value: "Gimnasia ritmica"
    },{
        key:"kangoo", value: "Botas Kangoo"
    },{
        key:"marciales", value: "Artes marciales"
    },{
        key:"fitness", value: "Fitness"
    },{
        key:"otrosdeportes", value: "Otros deportes"
    },
]

export const dates = [
    {
        key:"curso", value: "Curso escolar"
    }, {
        key:"verano", value: "Verano"
    }, {
        key:"santa", value: "Semana Santa"
    }, {
        key:"navidad", value: "Navidad"
    }, {
        key:"sincole", value: "Dias sin cole"
    },
]

export const getValueByKey = (array, key) => {
    const element = array.find(d => d.key === key)
    if (!element) {
        return ''
    }
    return element.value
}

export const getDateLabelByValue = (key) => getValueByKey(dates, key)
export const getSubcategoryLabelByValue = (key) => getValueByKey(subcategory, key)
export const getCategoryLabelByValue = (key) => getValueByKey(category, key)
export const getCityLabelByValue = (key) => getValueByKey(cities, key)
export const getTypeLabelByValue = (key) => getValueByKey(type, key)

export const cities = [
    {
        key: "40001", value: "Abades"
    }, {
        key: "40002", value: "Adrada de Pirón"
    }, {
        key: "40003", value: "Adrados"
    }, {
        key: "40004", value: "Aguilafuente"
    }, {
        key: "40005", value: "Alconada de Maderuelo"
    }, {
        key: "40012", value: "Aldea Real"
    }, {
        key: "40006", value: "Aldealcorvo"
    }, {
        key: "40007", value: "Aldealengua de Pedraza"
    }, {
        key: "40008", value: "Aldealengua de Santa María"
    }, {
        key: "40009", value: "Aldeanueva de la Serrezuela"
    }, {
        key: "40010", value: "Aldeanueva del Codonal"
    }, {
        key: "40013", value: "Aldeasoña"
    }, {
        key: "40014", value: "Aldehorno"
    }, {
        key: "40015", value: "Aldehuela del Codonal"
    }, {
        key: "40016", value: "Aldeonte"
    }, {
        key: "40017", value: "Anaya"
    }, {
        key: "40018", value: "Añe"
    }, {
        key: "40019", value: "Arahuetes"
    }, {
        key: "40020", value: "Arcones"
    }, {
        key: "40021", value: "Arevalillo de Cega"
    }, {
        key: "40022", value: "Armuña"
    }, {
        key: "40024", value: "Ayllón"
    }, {
        key: "40025", value: "Barbolla"
    }, {
        key: "40026", value: "Basardilla"
    }, {
        key: "40028", value: "Bercial"
    }, {
        key: "40029", value: "Bercimuel"
    }, {
        key: "40030", value: "Bernardos"
    }, {
        key: "40031", value: "Bernuy de Porreros"
    }, {
        key: "40032", value: "Boceguillas"
    }, {
        key: "40033", value: "Brieva"
    }, {
        key: "40034", value: "Caballar"
    }, {
        key: "40035", value: "Cabañas de Polendos"
    }, {
        key: "40036", value: "Cabezuela"
    }, {
        key: "40037", value: "Calabazas de Fuentidueña"
    }, {
        key: "40039", value: "Campo de San Pedro"
    }, {
        key: "40040", value: "Cantalejo"
    }, {
        key: "40041", value: "Cantimpalos"
    }, {
        key: "40043", value: "Carbonero el Mayor"
    }, {
        key: "40044", value: "Carrascal del Río"
    }, {
        key: "40045", value: "Casla"
    }, {
        key: "40046", value: "Castillejo de Mesleón"
    }, {
        key: "40047", value: "Castro de Fuentidueña"
    }, {
        key: "40048", value: "Castrojimeno"
    }, {
        key: "40049", value: "Castroserna de Abajo"
    }, {
        key: "40051", value: "Castroserracín"
    }, {
        key: "40052", value: "Cedillo de la Torre"
    }, {
        key: "40053", value: "Cerezo de Abajo"
    }, {
        key: "40054", value: "Cerezo de Arriba"
    }, {
        key: "40065", value: "Chañe"
    }, {
        key: "40055", value: "Cilleruelo de San Mamés"
    }, {
        key: "40056", value: "Cobos de Fuentidueña"
    }, {
        key: "40057", value: "Coca"
    }, {
        key: "40058", value: "Codorniz"
    }, {
        key: "40059", value: "Collado Hermoso"
    }, {
        key: "40060", value: "Condado de Castilnovo"
    }, {
        key: "40061", value: "Corral de Ayllón"
    }, {
        key: "40902", value: "Cozuelos de Fuentidueña"
    }, {
        key: "40062", value: "Cubillo"
    }, {
        key: "40063", value: "Cuéllar"
    }, {
        key: "40905", value: "Cuevas de Provanco"
    }, {
        key: "40068", value: "Domingo García"
    }, {
        key: "40069", value: "Donhierro"
    }, {
        key: "40070", value: "Duruelo"
    }, {
        key: "40071", value: "Encinas"
    }, {
        key: "40072", value: "Encinillas"
    }, {
        key: "40073", value: "Escalona del Prado"
    }, {
        key: "40074", value: "Escarabajosa de Cabezas"
    }, {
        key: "40075", value: "Escobar de Polendos"
    }, {
        key: "40076", value: "Espinar, El"
    }, {
        key: "40077", value: "Espirdo"
    }, {
        key: "40078", value: "Fresneda de Cuéllar"
    }, {
        key: "40079", value: "Fresno de Cantespino"
    }, {
        key: "40080", value: "Fresno de la Fuente"
    }, {
        key: "40081", value: "Frumales"
    }, {
        key: "40082", value: "Fuente de Santa Cruz"
    }, {
        key: "40083", value: "Fuente el Olmo de Fuentidueña"
    }, {
        key: "40084", value: "Fuente el Olmo de Íscar"
    }, {
        key: "40086", value: "Fuentepelayo"
    }, {
        key: "40087", value: "Fuentepiñel"
    }, {
        key: "40088", value: "Fuenterrebollo"
    }, {
        key: "40089", value: "Fuentesaúco de Fuentidueña"
    }, {
        key: "40091", value: "Fuentesoto"
    }, {
        key: "40092", value: "Fuentidueña"
    }, {
        key: "40093", value: "Gallegos"
    }, {
        key: "40094", value: "Garcillán"
    }, {
        key: "40095", value: "Gomezserracín"
    }, {
        key: "40097", value: "Grajera"
    }, {
        key: "40099", value: "Honrubia de la Cuesta"
    }, {
        key: "40100", value: "Hontalbilla"
    }, {
        key: "40101", value: "Hontanares de Eresma"
    }, {
        key: "40103", value: "Huertos, Los"
    }, {
        key: "40104", value: "Ituero y Lama"
    }, {
        key: "40105", value: "Juarros de Riomoros"
    }, {
        key: "40106", value: "Juarros de Voltoya"
    }, {
        key: "40107", value: "Labajos"
    }, {
        key: "40108", value: "Laguna de Contreras"
    }, {
        key: "40109", value: "Languilla"
    }, {
        key: "40110", value: "Lastras de Cuéllar"
    }, {
        key: "40111", value: "Lastras del Pozo"
    }, {
        key: "40112", value: "Lastrilla, La"
    }, {
        key: "40113", value: "Losa, La"
    }, {
        key: "40115", value: "Maderuelo"
    }, {
        key: "40903", value: "Marazoleja"
    }, {
        key: "40118", value: "Marazuela"
    }, {
        key: "40119", value: "Martín Miguel"
    }, {
        key: "40120", value: "Martín Muñoz de la Dehesa"
    }, {
        key: "40121", value: "Martín Muñoz de las Posadas"
    }, {
        key: "40122", value: "Marugán"
    }, {
        key: "40124", value: "Mata de Cuéllar"
    }, {
        key: "40123", value: "Matabuena"
    }, {
        key: "40125", value: "Matilla, La"
    }, {
        key: "40126", value: "Melque de Cercos"
    }, {
        key: "40127", value: "Membibre de la Hoz"
    }, {
        key: "40128", value: "Migueláñez"
    }, {
        key: "40129", value: "Montejo de Arévalo"
    }, {
        key: "40130", value: "Montejo de la Vega de la Serrezuela"
    }, {
        key: "40131", value: "Monterrubio"
    }, {
        key: "40132", value: "Moral de Hornuez"
    }, {
        key: "40134", value: "Mozoncillo"
    }, {
        key: "40135", value: "Muñopedro"
    }, {
        key: "40136", value: "Muñoveros"
    }, {
        key: "40138", value: "Nava de la Asunción"
    }, {
        key: "40139", value: "Navafría"
    }, {
        key: "40140", value: "Navalilla"
    }, {
        key: "40141", value: "Navalmanzano"
    }, {
        key: "40142", value: "Navares de Ayuso"
    }, {
        key: "40143", value: "Navares de Enmedio"
    }, {
        key: "40144", value: "Navares de las Cuevas"
    }, {
        key: "40145", value: "Navas de Oro"
    }, {
        key: "40904", value: "Navas de Riofrío"
    }, {
        key: "40146", value: "Navas de San Antonio"
    }, {
        key: "40148", value: "Nieva"
    }, {
        key: "40149", value: "Olombrada"
    }, {
        key: "40150", value: "Orejana"
    }, {
        key: "40151", value: "Ortigosa de Pestaño"
    }, {
        key: "40901", value: "Ortigosa del Monte"
    }, {
        key: "40152", value: "Otero de Herreros"
    }, {
        key: "40154", value: "Pajarejos"
    }, {
        key: "40155", value: "Palazuelos de Eresma"
    }, {
        key: "40156", value: "Pedraza"
    }, {
        key: "40157", value: "Pelayos del Arroyo"
    }, {
        key: "40158", value: "Perosillo"
    }, {
        key: "40159", value: "Pinarejos"
    }, {
        key: "40160", value: "Pinarnegrillo"
    }, {
        key: "40161", value: "Pradales"
    }, {
        key: "40162", value: "Prádena"
    }, {
        key: "40163", value: "Puebla de Pedraza"
    }, {
        key: "40164", value: "Rapariegos"
    }, {
        key: "40181", value: "Real Sitio de San Ildefonso"
    }, {
        key: "40165", value: "Rebollo"
    }, {
        key: "40166", value: "Remondo"
    }, {
        key: "40168", value: "Riaguas de San Bartolomé"
    }, {
        key: "40170", value: "Riaza"
    }, {
        key: "40171", value: "Ribota"
    }, {
        key: "40172", value: "Riofrío de Riaza"
    }, {
        key: "40173", value: "Roda de Eresma"
    }, {
        key: "40174", value: "Sacramenia"
    }, {
        key: "40176", value: "Samboal"
    }, {
        key: "40177", value: "San Cristóbal de Cuéllar"
    }, {
        key: "40178", value: "San Cristóbal de la Vega"
    }, {
        key: "40906", value: "San Cristóbal de Segovia"
    }, {
        key: "40182", value: "San Martín y Mudrián"
    }, {
        key: "40183", value: "San Miguel de Bernuy"
    }, {
        key: "40184", value: "San Pedro de Gaíllos"
    }, {
        key: "40179", value: "Sanchonuño"
    }, {
        key: "40180", value: "Sangarcía"
    }, {
        key: "40185", value: "Santa María la Real de Nieva"
    }, {
        key: "40186", value: "Santa Marta del Cerro"
    }, {
        key: "40188", value: "Santiuste de Pedraza"
    }, {
        key: "40189", value: "Santiuste de San Juan Bautista"
    }, {
        key: "40190", value: "Santo Domingo de Pirón"
    }, {
        key: "40191", value: "Santo Tomé del Puerto"
    }, {
        key: "40192", value: "Sauquillo de Cabezas"
    }, {
        key: "40193", value: "Sebúlcor"
    }, {
        key: "40194", value: "Segovia"
    }, {
        key: "40195", value: "Sepúlveda"
    }, {
        key: "40196", value: "Sequera de Fresno"
    }, {
        key: "40198", value: "Sotillo"
    }, {
        key: "40199", value: "Sotosalbos"
    }, {
        key: "40200", value: "Tabanera la Luenga"
    }, {
        key: "40201", value: "Tolocirio"
    }, {
        key: "40206", value: "Torre Val de San Pedro"
    }, {
        key: "40202", value: "Torreadrada"
    }, {
        key: "40203", value: "Torrecaballeros"
    }, {
        key: "40204", value: "Torrecilla del Pinar"
    }, {
        key: "40205", value: "Torreiglesias"
    }, {
        key: "40207", value: "Trescasas"
    }, {
        key: "40208", value: "Turégano"
    }, {
        key: "40210", value: "Urueñas"
    }, {
        key: "40211", value: "Valdeprados"
    }, {
        key: "40212", value: "Valdevacas de Montejo"
    }, {
        key: "40213", value: "Valdevacas y Guijar"
    }, {
        key: "40218", value: "Valle de Tabladillo"
    }, {
        key: "40219", value: "Vallelado"
    }, {
        key: "40220", value: "Valleruela de Pedraza"
    }, {
        key: "40221", value: "Valleruela de Sepúlveda"
    }, {
        key: "40214", value: "Valseca"
    }, {
        key: "40215", value: "Valtiendas"
    }, {
        key: "40216", value: "Valverde del Majano"
    }, {
        key: "40222", value: "Veganzones"
    }, {
        key: "40223", value: "Vegas de Matute"
    }, {
        key: "40224", value: "Ventosilla y Tejadilla"
    }, {
        key: "40225", value: "Villacastín"
    }, {
        key: "40228", value: "Villaverde de Íscar"
    }, {
        key: "40229", value: "Villaverde de Montejo"
    }, {
        key: "40230", value: "Villeguillo"
    }, {
        key: "40231", value: "Yanguas de Eresma"
    }, {
        key: "40233", value: "Zarzuela del Monte"
    }, {
        key: "40234", value: "Zarzuela del Pinar"
    }
]