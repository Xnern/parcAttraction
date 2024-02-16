import request.request as req

def add_critique(data):
    if (not "attraction_id" in data or data["attraction_id"] is None):
        return False
    if (not "prenom" in data or data["prenom"] == ""):
        data["prenom"] == "Anonyme"
    if (not "nom" in data or data["nom"] == ""):
        data["nom"] == "Anonyme"
    if (not "note" in data or data["note"] == ""):
        return False
    if (not "commentaire" in data or data["commentaire"] == ""):
        return False

 

    if ("critique_id" in data and data["critique_id"]):
      requete = f"UPDATE critique SET note={data['note']}, commentaire='{data['commentaire']}', attraction_id={data['attraction_id']}, prenom='{data['prenom']}', nom='{data['nom']}' WHERE critique_id = {data['critique_id']}"
      req.insert_in_db(requete)
      id = data['critique_id']
    else:
      requete = "INSERT INTO critique (attraction_id, prenom, nom, note, commentaire) VALUES (?, ?, ?, ?, ?);"
      id = req.insert_in_db(requete, (data["attraction_id"], data["prenom"], data["nom"], data["note"], data["commentaire"]  ))

    return True

def get_all_critique():
    json = req.select_from_db("SELECT * FROM critique")
    
    return json

def get_critique(id):
    if (not id):
        return False

    json = req.select_from_db("SELECT * FROM critique WHERE critique_id = ?", (id,))

    if len(json) > 0:
        return json[0]
    else:
        return []

def delete_critique(id):
    if (not id):
        return False

    req.delete_from_db("DELETE FROM critique WHERE critique_id = ?", (id,))

    return True

def get_critique_by_attraction(id):
    if (not id):
        return False

    json = req.select_from_db("SELECT * FROM critique WHERE attraction_id = ?", (id,))

    if len(json) > 0:
        return json
    else:
        return []
