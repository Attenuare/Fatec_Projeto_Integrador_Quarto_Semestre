from recicle_apis_consume.recicle_atlas.libs.recicle_atlas_class import RecicleAtlas
from django.shortcuts import render, redirect, HttpResponseRedirect
from rest_framework.response import Response
from rest_framework.views import APIView


class RecicleMaterialsView(APIView):

    def get(self, request):
        object_ = RecicleAtlas()
        object_.extract_information_about_recicles()
        object_.treat_data_state()
        temp_list = list()
        for state in object_.by_state.keys():
            possible_state = object_.by_state[state]
            possible_state['state'] = state
            temp_list.append(possible_state)
        object_.all_materials = temp_list
        # test = [{
        #     'ouput': 'sim',
        #     'input': 'não'
        # }]
        return Response(object_.all_materials)
