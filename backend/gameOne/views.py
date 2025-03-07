from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import GameScore
from .serializers import GameScoreSerializer

class SubmitScoreView(APIView):
    def post(self, request):
        print("Received Data:", request.data)  # Debugging

        serializer = GameScoreSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Score saved successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LeaderboardView(APIView):
    def get(self, request):
        leaderboard = []
        modes = ["easy", "hard", "ai"]

        for mode in modes:
            scores = GameScore.objects.filter(mode=mode).order_by('-score')[:8]  # Get top 8 scores
            leaderboard.append({
                "mode": mode,
                "scores": [{"username": entry.username, "score": entry.score} for entry in scores]
            })

        return Response(leaderboard, status=status.HTTP_200_OK)
