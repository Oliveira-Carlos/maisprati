# já tenho costume de fazer algumas coisas em python, então fiz esse script só para facilitar a criação das pastas

for i in range(1, 16):
    file_name = f"question{i:02}.js" 
    with open(file_name, 'w') as file:
        file.write(f"// {file_name}") 
