use peopledb;

create table people
(
  id int not null auto_increment,
  name varchar(100),
  primary key(id)
);

set character_set_client = utf8;
set character_set_connection = utf8;
set character_set_results = utf8;
set collation_connection = utf8_general_ci;
