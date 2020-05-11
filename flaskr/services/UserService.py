from flaskr.dataaccess.entities.Game import Game
from flaskr.dataaccess.UserDAO import UserDAO
import json
import datetime
from flask import current_app
import re

class UserService:

    def __init__(self):
        pass

    def insert_user(self,userID,logintype, accountID, profilePicture, email, activeFlag):
        return UserDAO().insert_user(userID,logintype, accountID, profilePicture, email, activeFlag)

    def get_user(self,userID):
        return UserDAO().get_user(userID)

    def delete_user(self,userID):
        return UserDAO().delete_user(userID)