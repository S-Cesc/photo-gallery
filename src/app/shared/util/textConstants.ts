
/**
 * Collection of reusable error messages
 */
// TODO (missatges d'error)
export const errorMessages: { [key: string]: string } = {
    email: "Email ha de ser una adreça vàlida d'email (usuari@domini)",
    emailAgain: 'Les adreces de correu han de coincidir.',
    password: "Mínim 8 caràcters, amb una majúscula, una minúscula, un número i un símbol.",
    passwordAgain: 'Les contrasenyes han de coincidir.',
    displayName: 'El nom a de tenir com a mínim tres caracters i ser ÚNIC.',
    formulari: "Error inesperat: Potser no es compleixen les condicions del formulari, o ha hagut un error en el servei.",
    serveiLogin: "A fallat l'operació de login. Si us plau, torneu a provar!",
    serveiRegistre: "A fallat l'operació de registre. Si us plau, torneu a provar!",
	serveiRecovery: "A fallat l'operació. Si us plau, torneu a provar si verifiqueu que no us ha arribat el correu!",
	serveiLogout: "A fallat l'operació. Si us plau, repetiu-la si encara sou l'usuari actiu de l'aplicació.",
    senseUsari:  "Cap usuari ha iniciat sessió.",
	usuariNoValidat: "Usuari no validat.",
	usuariNoValidatDetall:
	 "Recordi revisar el correu per confirmar-lo, i ser reconegut com a usuari. Llavors, refresqueu la pàgina, i podreu introduir el nom públic.",
	ingredientsServiceError: "Error en el servei d'ingredients.",
};

/**
 * Collection of reusable hint messages
 * -- Note sometimes there could be a reusable errorMessages item;
 * 		then, do not duplicate it (use the error message as hint)
 */
export const hintMessages: { [key: string]: string } = {
	email: "Adreça de correu.",
	emailAgain: "Repetiu l'adreça de correu.",
	password: "Podeu fer servir una frase que tingui majúscules i un número.",
	passwordAgain: "Repetiu la contrasenya.",
	displayName: 'Es requereix un nom per permetre a altres usuaris identificar-vos.',
	registerRequired: "Per acedir a aquest lloc web és necessari registrar-se.",
	imageURL: "Podeu definir una icona, per exemple a",
	firstProfile: "Primer perfil dietètic",
	secondProfile: "Segon perfil dietètic",
	thirdProfile: "Tercer perfil dietètic",
	nonPublicStaff: "Informació personal no pública",
	nonPublicStaffDetail: "Aquesta informació només es fa servir quan executeu el programa:\
				l'idioma per a la visualització, i podeu definir perfils dietètics per a les vostres búsquedes.",
	passwordRecovery: "Aquest formulari permet enviar-vos un correu amb un enllaç que us permetrà establir la contrasenya.",
	passwordRecoveryDone: "S'ha enviat un correu amb un enllaç que permet restablir la contrasenya.",
};

/**
 * Collection of page names
 */
export const pageNames: { [key: string]: string } = {
	register: "Registar-se en el lloc web",
	login: "Inici de sessió",
	profile: "Dades de l'usuari",
	preview: "Previsualització",
	recovery: "Establir de nou la contrasenya",
	changePassword: "Canviar la contrasenya",
};

/**
 * Collection of reusable form labels
 */
export const formLabels: { [key: string]: string } = {
	email: "Usuari (email)",
	emailAgain: "Repetiu l'usuari",
	password: "Contrasenya",
	passwordAgain: "Repetiu la contrasenya",
	displayName: "Nom públic per a mostrar",
	imageURL: "URL de la imatge",
	firstProfile: "Nom del primer perfil dietètic",
	secondProfile: "Nom del segon perfil dietètic",
	thirdProfile: "Nom del tercer perfil dietètic",
}

export const formActions: { [key: string]: string } = {
	signup: "Registrar-se",
	signin: "Accedir-hi",
	passwordRecover: "Contrasenya oblidada",
	changeEmail: "Canviar l'email",
	changePassword: "Canviar contrasenya",
	recovery: "Establir de nou la contrasenya",
	entente: "Entesos",
	send: "Enviar",
}
