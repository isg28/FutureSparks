from rest_framework import serializers
from .models import GameScore

class GameScoreSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=50)
    score = serializers.IntegerField()
    mode = serializers.ChoiceField(choices=["easy", "hard", "ai"])

    def create(self, validated_data):
        return GameScore(**validated_data).save()  
