import mongoengine as me

class GameScore(me.Document):
    username = me.StringField(required=True, max_length=50)
    score = me.IntField(required=True)
    mode = me.StringField(required=True, choices=["easy", "hard", "ai"])
    
    meta = {
        'collection': 'game_scores'  
    }
