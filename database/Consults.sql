delimiter $$
DROP procedure if exists GetAllCatedraticos $$
CREATE procedure GetAllCatedraticos ()
BEGIN
	SELECT * FROM catedratico;
END $$

DROP procedure if exists GetAllUsers $$
CREATE procedure GetAllUsers ()
BEGIN
	SELECT * FROM usuario;
END $$

DROP procedure if exists GetAllCourse $$
CREATE procedure GetAllCourse ()
BEGIN
	SELECT * FROM curso;
END $$

DROP procedure if exists GetAllAsign $$
CREATE procedure GetAllAsign ()
BEGIN
	SELECT * FROM asignacion;
END $$

DROP procedure if exists GetAllAprobe $$
CREATE procedure GetAllAprobe ()
BEGIN
	SELECT * FROM aprobado;
END $$

DROP procedure if exists GetAllPublish $$
CREATE procedure GetAllPublish ()
BEGIN
	SELECT * FROM publicacion;
END $$

DROP procedure if exists GetAllComment $$
CREATE procedure GetAllComment ()
BEGIN
	SELECT * FROM comentario;
END $$

DROP procedure if exists GetKeyUser $$
CREATE procedure GetKeyUser (
	IN p_carnet	INT
)
BEGIN
	SELECT * FROM usuario
	WHERE carnet = p_carnet;
END $$

DROP procedure if exists GetKeyCatedratico $$
CREATE procedure GetKeyCatedratico (
	IN p_id	INT
)
BEGIN
	SELECT * FROM catedratico
	WHERE id = p_id;
END $$

DROP procedure if exists GetKeyCourse $$
CREATE procedure GetKeyCourse (
	IN p_id	INT
)
BEGIN
	SELECT * FROM curso
	WHERE id = p_id;
END $$

DROP procedure if exists GetKeyAsign $$
CREATE procedure GetKeyAsign (
	IN p_id	INT
)
BEGIN
	SELECT * FROM asignacion
	WHERE id = p_id;
END $$

DROP procedure if exists GetKeyAprobe $$
CREATE procedure GetKeyAprobe (
	IN p_id	INT
)
BEGIN
	SELECT * FROM aprobado
	WHERE id = p_id;
END $$

DROP procedure if exists GetKeyPublish $$
CREATE procedure GetKeyPublish (
	IN p_id	INT
)
BEGIN
	SELECT * FROM publicacion
	WHERE id = p_id;
END $$

DROP procedure if exists GetKeyComment $$
CREATE procedure GetKeyComment (
	IN p_id	INT
)
BEGIN
	SELECT * FROM comentario
	WHERE id = p_id;
END $$

DROP procedure if exists CreateUser $$
CREATE procedure CreateUser (
	IN p_carnet INT,
	IN p_nombres VARCHAR (50),
	IN p_apellidos VARCHAR(50),
	IN p_contrasena VARCHAR(50),
	IN p_correo VARCHAR(50)
)
BEGIN
	INSERT INTO usuario (carnet,nombres,apellidos,contrasena,correo) values 
	(p_carnet,p_nombres,p_apellidos,p_contrasena,p_correo);
END $$

DROP procedure if exists CreatePublish $$
CREATE procedure CreatePublish (
	IN p_user VARCHAR(50),
	IN p_curso VARCHAR (50),
	IN p_mensaje VARCHAR(50),
	IN p_fecha TIMESTAMP default current_TIMESTAMP
)
BEGIN
	INSERT INTO publicacion (usuario,curso,mensaje,fecha) values 
	(p_user,p_curso,p_mensaje,p_fecha);
END $$



delimiter ;


CALL GetAllCatedraticos();
CALL GetAllUsers();
CALL GetAllCourse();
CALL GetAllAsign();
CALL GetAllAprobe();
CALL GetAllPublish();
CALL GetAllComment();
CALL GetKeyUser(202015484);
CALL GetKeyCatedratico(17);
CALL GetKeyCourse();
CALL GetKeyAsign();
CALL GetKeyAprobe();
CALL GetKeyPublish();
CALL GetKeyComment();
CALL CreateUser(214521401,'Sebastian', 'Gonzalez', '123456', 'ingenieria@gmail.com');
CALL CreatePublish(17,'Economía', 'Esta clase es muy dificil', '15/09/2024');