from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse

def get_candle_stick_data(request):
    # hard coded data to return as JSON
    data = {
        "status": "success",
        "data": [
            {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
            {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
            {"x": "2023-01-03", "open": 55, "high": 80, "low": 50, "close": 77},
            {"x": "2023-01-04", "open": 77, "high": 50, "low": 77, "close": 66},
            {"x": "2023-01-05", "open": 66, "high": 15, "low": 68, "close": 22},
        ]
    }
    
    # Return the data as a JSON response
    return JsonResponse(data)

def get_line_data(request):
    # hard coded data to return as JSON
    data = {
        "status": "success",
        "data":  {
            "labels": ["Jan", "Feb", "Mar", "Apr"],
            "data": [10, 20, 30, 40]
        }
    }
    
    # Return the data as a JSON response
    return JsonResponse(data)

def get_bar_data(request):
    # hard coded data to return as JSON
    data = {
        "status": "success",
        "data": {
            "labels": ["Product A", "Product B", "Product C"],
            "data": [100, 150, 200]
        }
    }
    
    # Return the data as a JSON response
    return JsonResponse(data)

def get_pie_data(request):
    # hard coded data to return as JSON
    data = {
        "status": "success",
        "data": {
            "labels": ["Red", "Blue", "Yellow"],
            "data": [300, 50, 100]
        }
    }
    
    # Return the data as a JSON response
    return JsonResponse(data)